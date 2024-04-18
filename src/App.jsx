import { useReducer, useRef } from 'react';
import { Layer, Stage } from 'react-konva';

import Sidebar from "./components/Sidebar/Sidebar.jsx";

function App() {
    const stageRef = useRef(null)

    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'INIT':
                return { selectedItem: '', items: action.value };

            case 'ADD_ITEM':
                return { selectedItem: action.valueId, items: [...state.items, action.value] };

            default:
                return state;
        }
    }, {
        selectedItems: '',
        items: []
    });

    const handleAddImage = (id, url, x, y) => {
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
                width: 200,
                height: 200,
                isXFlipped: false,
                isYFlipped: false
            }
        });
    }

    return (
        <div className={`relative`}>
            <div className={`fixed inset-0 h-20 bg-violet-400`}>
            </div>
            <div className={`h-screen pt-20 flex`}>
                <Sidebar onAdd={handleAddImage} stageRef={stageRef} />
                <div className={`w-full h-full-lib bg-zinc-200`}>
                    <Stage ref={stageRef} width={parent.innerWidth} height={1000} style={{ backgroundColor: 'black' }}>
                        <Layer>

                        </Layer>
                    </Stage>
                </div>

            </div>
        </div>
    )
}

export default App;

