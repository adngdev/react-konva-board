import { useState } from "react";

import ImageLib from "../SidebarOptions/ImageLib.jsx";
import TextLib from "../SidebarOptions/TextLib.jsx";
import UnsplashLib from "../SidebarOptions/UnsplashLib.jsx";
import PinterestLib from "../SidebarOptions/PinterestLib.jsx";
import ImageUpload from "../SidebarOptions/ImageUpload.jsx";

import { FaPinterestP, FaUnsplash } from "react-icons/fa";
import { RiText } from "react-icons/ri";
import { CiImageOn } from "react-icons/ci";
import { IoCloudUploadOutline } from "react-icons/io5";

const optionRef = {
    1: <ImageLib />,
    2: <TextLib />,
    3: <UnsplashLib />,
    4: <PinterestLib />,
    5: <ImageUpload />
}

const Sidebar = () => {
    const [selectOption, setSelectOption] = useState(0);

    const handleSelectOption = option => {
        setSelectOption(option);
    }

    return (
        <div className={`flex`}>
            <div className={`w-28 h-full space-y-2 flex flex-col items-center bg-slate-700`}>
                <button type={`button`} onClick={() => handleSelectOption(1)} className={`w-full p-5 text-zinc-200 ${selectOption === 1 && 'bg-slate-600 rounded-l-2xl'} hover:bg-slate-600 active:translate-x-2 transition-all transform-gpu`}>
                    <div className={`flex justify-center`}>
                        <CiImageOn size={30} />
                    </div>
                    <p>Images</p>
                </button>
                <button type={`button`} onClick={() => handleSelectOption(2)}  className={`w-full p-5 text-zinc-200 ${selectOption === 2 && 'bg-slate-600 rounded-l-2xl'} hover:bg-slate-600 active:translate-x-2 transition-all transform-gpu`}>
                    <div className={`flex justify-center`}>
                        <RiText size={30} />
                    </div>
                    <p>Text</p>
                </button>
                <button type={`button`} onClick={() => handleSelectOption(3)} className={`w-full p-5 text-zinc-200 ${selectOption === 3 && 'bg-slate-600 rounded-l-2xl'} hover:bg-slate-600 active:translate-x-2 transition-all transform-gpu`}>
                    <div className={`flex justify-center`}>
                        <FaUnsplash size={30} />
                    </div>
                    <p>Unsplash</p>
                </button>
                <button type={`button`} onClick={() => handleSelectOption(4)} className={`w-full p-5 text-zinc-200 ${selectOption === 4 && 'bg-slate-600 rounded-l-2xl'} hover:bg-slate-600 active:translate-x-2 transition-all transform-gpu`}>
                    <div className={`flex justify-center`}>
                        <FaPinterestP size={30} />
                    </div>
                    <p>Pinterest</p>
                </button>
                <button type={`button`} onClick={() => handleSelectOption(5)} className={`w-full p-5 text-zinc-200 ${selectOption === 5 && 'bg-slate-600 rounded-l-2xl'} hover:bg-slate-600 active:translate-x-2 transition-all transform-gpu`}>
                    <div className={`flex justify-center`}>
                        <IoCloudUploadOutline size={30} />
                    </div>
                    <p>Upload</p>
                </button>
            </div>
            { selectOption ? optionRef[selectOption] : null }
        </div>
    );
};

export default Sidebar;
