import { useReducer, useRef } from 'react';
import { Layer, Rect, Stage } from 'react-konva';

import Sidebar from "./components/Sidebar/Sidebar.jsx";
import ImageCard from './components/Cards/ImageCard.jsx';

function App() {
    const stageRef = useRef(null);
    const containerRef = useRef(null);

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
        <div className={`relative`}>
            <div className={`fixed inset-0 h-20 bg-violet-400`}>
            </div>
            <div className={`h-screen pt-20 flex`}>
                {console.log(state)}
                <Sidebar onAdd={handleAddImage} stageRef={stageRef} />
                <div ref={containerRef} className={`h-full w-full`}>
                    <Stage ref={stageRef} width={containerRef.current?.clientWidth} height={containerRef.current?.clientHeight}>
                        <Layer>
                            <Rect
                                x={0}
                                y={0}
                                fill={`white`}
                                width={containerRef.current?.clientWidth}
                                height={containerRef.current?.clientHeight}
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
    )
}

export default App;

