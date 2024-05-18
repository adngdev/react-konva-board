import { useEffect, useRef, useState } from 'react';
import { Text, Transformer } from 'react-konva';
import { Html } from 'react-konva-utils';

const TextCard = ({ item, isSelected, onSelect, onMoveEnd, onTextEdit, onDimensionChange, onOutCanvas }) => {
    const textRef = useRef(null);
    const transformerRef = useRef(null);

    const [isEditing, setEditing] = useState(false);

    useEffect(() => {
        if (transformerRef.current === null) {
            return;
        }
        transformerRef.current.nodes([textRef.current]);
        transformerRef.current.getLayer().batchDraw();
    });

    return <>
        <Text
            text = {item.text}
            x = {item.x}
            y = {item.y}
            ref = {textRef}
            width = {item.width}
            height = {item.height}
            fontFamily = {item.fontFamily}
            fontSize = {item.fontSize}
            rotation = {item.rotation}
            offsetX=  {item.isXFlipped ? item.width : 0}
            scaleX = {item.isXFlipped ? -1 : 1}
            offsetY = {item.isYFlipped ? item.height : 0}
            scaleY = {item.isYFlipped ? -1 : 1}
            lineHeight = {1.2}
            ellipsis = {true}
            draggable = {true}
            onMouseDown = {() => onSelect(item.id)}
            onDragEnd = {e => {
                if (e.target.attrs.x < -item.width || e.target.attrs.y < -item.height || e.target.attrs.x > 1000 || e.target.attrs.y > 500) {
                    onOutCanvas();
                }

                onMoveEnd(item.id, e.target.attrs.x, e.target.attrs.y);
            }}
            onTransform={() => {
                const node = textRef.current;
                const scaleX = node.scaleX();
                const scaleY = node.scaleY();

                node.scaleX(1);
                node.scaleY(1);
                onDimensionChange(item.id, node.attrs.fontSize * scaleY, node.width() * scaleX, node.height() * scaleY, node.attrs.rotation, node.attrs.x, node.attrs.y);
            }}
            onTransformEnd={e => {
                if (e.target.attrs.x < -item.width || e.target.attrs.y < -item.height || e.target.attrs.x > 1000 || e.target.attrs.y > 500) {
                    onOutCanvas();
                }
            }}
            onDblClick={() => setEditing(true)}
        />
        { isSelected && !isEditing &&
            <Transformer
                enabledAnchors={['top-left', 'top-right', 'middle-right', 'middle-left', 'bottom-left', 'bottom-right']}
                ref={transformerRef}
                flipEnabled={false}
                boundBoxFunc={(oldItem, newItem) => {
                    if (Math.abs(newItem.width) < 5 || Math.abs(newItem.height) < 5) {
                        return oldItem;
                    }
                    return newItem;
                }}
            />
        }
        { isEditing &&
            <Html>
                <textarea
                    defaultValue={item.text}
                    style={{
                        position: 'absolute',
                        left: item.x,
                        top: item.y,
                        width: item.width,
                        height: item.height,
                        padding: 0,
                        margin: 0,
                        border: 'none',
                        boxShadow: '2px 2px 5px 2px rgba(250, 250, 250, 0.3)',
                        fontFamily: item.fontFamily,
                        fontSize: item.fontSize,
                        outline: 'none',
                        resize: 'none',
                        transformOrigin: 'left top',
                        overflow: 'hidden',
                        background: 'white',
                        lineHeight: 1.2
                    }}
                    autoFocus={true}
                    onChange={e => {
                        onTextEdit(item.id, e.target.value, item.width, e.target.scrollHeight);
                    }}
                    onBlur={() => setEditing(false)}
                />
            </Html>
        }
    </>
};

export default TextCard;
