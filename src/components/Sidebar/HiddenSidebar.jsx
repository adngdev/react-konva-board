import { lazy } from 'react';

import ImageLib from '../SidebarOptions/ImageLib.jsx';
import TextLib from '../SidebarOptions/TextLib.jsx';

const UnsplashLib = lazy(() => import('../SidebarOptions/UnsplashLib.jsx'))

const optionRef = {
    1: 'Image',
    2: 'Text',
    3: 'Unsplash',
    4: 'Pinterest'
};

const HiddenSidebar = ({ option, onAdd, onAddText, stageRef, setClose }) => {
    return (
        <div>
            <div onClick={setClose} className={`${option !== 0 ? 'inset-0 fixed' : 'inset-auto'}`}/>
            <div className={`${option !== 0 ? 'animate-slide-right' : 'hidden'} w-96 space-y-2 bg-slate-50 transition-all origin-left duration-300 transform-gpu`}>
                <div className={`p-4 flex justify-between items-center bg-zinc-200`}>
                    <p className={`text-xl font-medium`}>{optionRef[option]} Library</p>
                    <button type={`button`} className={`w-7 h-7 flex justify-center items-center bg-white shadow-sm rounded-md hover:bg-zinc-100`} onClick={setClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                { option === 1 ? <ImageLib onAdd={onAdd} stageRef={stageRef} />
                    : option === 2 ? <TextLib onAdd={onAddText} stageRef={stageRef} />
                        : option === 3 ? <UnsplashLib onAdd={onAdd} stageRef={stageRef} />
                            : null
                }
            </div>
        </div>
    );
};

export default HiddenSidebar;
