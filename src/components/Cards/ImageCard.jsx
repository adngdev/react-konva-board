import { useEffect, useRef } from 'react';
import { Image, Transformer } from 'react-konva';

import useImage from 'use-image';

const ImageCard = ({ item, isSelected, onSelect, onMoveEnd, onDimensionChange, onOutCanvas }) => {
    const imageRef = useRef(null);
    const transformerRef = useRef(null);

    const [image] = useImage(item.image, 'anonymous');

    useEffect(() => {
        if (transformerRef.current === null) {
            return;
        }
        transformerRef.current.nodes([imageRef.current]);
        transformerRef.current.getLayer().batchDraw();
    });

    return <>
        <Image
            image = {image}
            x = {item.x}
            y = {item.y}
            ref = {imageRef}
            width = {item.width}
            height = {item.height}
            rotation = {item.rotation}
            offsetX=  {item.isXFlipped ? item.width : 0}
            scaleX = {item.isXFlipped ? -1 : 1}
            offsetY = {item.isYFlipped ? item.height : 0}
            scaleY = {item.isYFlipped ? -1 : 1}
            draggable = {true}
            onMouseDown = {() => onSelect(item.id)}
            onDragEnd = {e => {
                if (e.target.attrs.x < -item.width || e.target.attrs.y < -item.height || e.target.attrs.x > 1000 || e.target.attrs.y > 500) {
                    onOutCanvas();
                }

                onMoveEnd(item.id, e.target.attrs.x, e.target.attrs.y);
            }}
            onTransformEnd={() => {
                const node = imageRef.current;
                const scaleX = node.scaleX();
                const scaleY = node.scaleY();

                node.scaleX(1);
                node.scaleY(1);

                if (node.attrs.x < -(node.width() * scaleX) || node.attrs.y < -(node.height() * scaleY) || node.attrs.x > 1000 || node.attrs.y > 500) {
                    onOutCanvas();
                }
                onDimensionChange(item.id, node.width() * scaleX, node.height() * scaleY, node.attrs.rotation, node.attrs.x, node.attrs.y);
            }}
        />
        { isSelected &&
            <Transformer
                ref = {transformerRef}
                boundBoxFunc={(oldItem, newItem) => {
                    if (Math.abs(newItem.width) < 5 || Math.abs(newItem.height) < 5) {
                        return oldItem;
                    }
                    return newItem;
                }}
            />
        }
    </>
};

export default ImageCard;