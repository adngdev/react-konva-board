import { useReducer, useRef } from 'react';
import { Layer, Rect, Stage } from 'react-konva';

import Sidebar from "../components/Sidebar/Sidebar.jsx";
import ImageCard from '../components/Cards/ImageCard.jsx';
import Toolbar from '../components/Toolbar/Toolbar.jsx';

const Board = () => {
    const stageRef = useRef(null);

    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'INIT':
                return { selectedItem: '', items: action.value };

            case 'ADD_ITEM':
                return { selectedItem: action.valueId, items: [...state.items, action.value] };

            case 'SELECT_ITEM':
                return { ...state, selectedItem: action.valueId };

            case 'DESELECT_ITEM':
                return { ...state, selectedItem: '' };

            case 'MOVE_ITEM':
                return { selectedItem: action.valueId, items: [...state.items.map(item => item.id === action.valueId ? { ...item, x: action.valueX, y: action.valueY } : item)] };

            case 'CHANGE_DIMENSION':
                return { selectedItem: action.valueId, items: [...state.items.map(item => item.id === action.valueId ? { ...item, width: action.valueWidth, height: action.valueHeight, rotation: action.valueR, x: action.valueX, y: action.valueY } : item)] };

            case 'FLIP':
                return { ...state, items: [...state.items.map(item => item.id === state.selectedItem ? { ...item, isXFlipped: !item.isXFlipped } : item)] }

            default:
                return state;
        }
    }, {
        selectedItem: '',
        items: []
    });

    const handleAddImage = (id, url, x, y, width, height) => {
        dispatch({
            type: 'ADD_ITEM',
            valueId: id,
            value: {
                id: id,
                type: 'IMAGE',
                image: url,
                x: x,
                y: y,
                rotation: 0,
                width: width,
                height: height,
                isXFlipped: false,
                isYFlipped: false
            }
        });
    }

    const handleSelectItem = id => {
        dispatch({ type: 'SELECT_ITEM', valueId: id });
    }

    const handleMoveItem = (id, x, y) => {
        dispatch({ type: 'MOVE_ITEM', valueId: id, valueX: x, valueY: y });
    }

    const handleChangeDimension = (id, width, height, rotation, x, y) => {
        dispatch({ type: 'CHANGE_DIMENSION', valueId: id, valueWidth: width, valueHeight: height, valueRotation: rotation, valueX: x, valueY: y });
    }

    return (
        <div className={`h-full pt-16 flex`}>
            <Sidebar onAdd={handleAddImage} stageRef={stageRef} />
            <div className={`w-full h-sidebar bg-slate-200`}>
                <Toolbar />
                <div className={`h-lib flex justify-center items-center`}>
                    <Stage ref={stageRef} width={1000} height={500}>
                        <Layer>
                            <Rect
                                x={0}
                                y={0}
                                fill={`white`}
                                width={1000}
                                height={500}
                                draggable={false}
                                onClick={() => dispatch({ type: 'DESELECT_ITEM' })}
                            />
                            { state.items.map(item =>
                                item.type === 'IMAGE' ?
                                    <ImageCard
                                        key={item.id}
                                        item={item}
                                        isSelected={state.selectedItem === item.id}
                                        onSelect={handleSelectItem}
                                        onMoveEnd={handleMoveItem}
                                        onDimensionChange={handleChangeDimension}
                                    />
                                    : null
                            )}
                        </Layer>
                    </Stage>
                </div>
            </div>
        </div>
    );
};

export default Board;
