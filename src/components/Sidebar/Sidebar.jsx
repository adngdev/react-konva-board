import { lazy, Suspense, useState } from 'react';

import { FaUnsplash } from "react-icons/fa";
import { RiText } from "react-icons/ri";
import { CiImageOn } from "react-icons/ci";

const HiddenSidebar = lazy(() => import('./HiddenSidebar.jsx'));

const Sidebar = ({ onAdd, onAddText, stageRef }) => {
    const [selectOption, setSelectOption] = useState(0);

    const handleSelectOption = option => {
        setSelectOption(option);
    };

    const handleClose = () => {
        setSelectOption(0);
    };

    return (
        <div className={`fixed z-20 h-sidebar flex`}>
            <div className={`w-24 p-1 h-full space-y-2 flex flex-col items-center bg-zinc-200 border-r border-zinc-300`}>
                <button type={`button`} onClick={() => handleSelectOption(1)} className={`w-full p-5 rounded-lg ${selectOption === 1 && 'bg-white border border-zinc-300 shadow-sm'} hover:bg-zinc-300 active:scale-95 transition-all transform-gpu`}>
                    <div className={`flex justify-center`}>
                        <CiImageOn size={30} />
                    </div>
                    <p className={`text-xs`}>Images</p>
                </button>
                <button type={`button`} onClick={() => handleSelectOption(2)}  className={`w-full p-5 rounded-lg ${selectOption === 2 && 'bg-white border border-zinc-300 shadow-sm'} hover:bg-zinc-300 active:scale-95 transition-all transform-gpu`}>
                    <div className={`flex justify-center`}>
                        <RiText size={30} />
                    </div>
                    <p className={`text-xs`}>Text</p>
                </button>
                <button type={`button`} onClick={() => handleSelectOption(3)} className={`w-full p-5 rounded-lg ${selectOption === 3 && 'bg-white border border-zinc-300 shadow-sm'} hover:bg-zinc-300 active:scale-95 transition-all transform-gpu`}>
                    <div className={`flex justify-center`}>
                        <FaUnsplash size={30} />
                    </div>
                    <p className={`text-xs`}>Unsplash</p>
                </button>
            </div>
            <Suspense fallback={<div className={`w-96 bg-slate-50`} />}>
                <HiddenSidebar option={selectOption} onAdd={onAdd} onAddText={onAddText} stageRef={stageRef} setClose={handleClose} />
            </Suspense>
        </div>
    );
};

export default Sidebar;
