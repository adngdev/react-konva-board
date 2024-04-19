import { useEffect, useRef } from 'react';
import { Image, Transformer } from 'react-konva';

import useImage from 'use-image';

const ImageCard = ({ item, isSelected, onSelect, onMoveEnd }) => {
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
            draggable={true}
            onMouseDown={() => onSelect(item.id)}
            onDragEnd={e => onMoveEnd(item.id, e.target.attrs.x, e.target.attrs.y)}
        />
        { isSelected &&
            <Transformer
                ref={transformerRef}
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