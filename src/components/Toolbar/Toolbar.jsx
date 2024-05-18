import { LuFlipHorizontal2, LuFlipVertical2 } from 'react-icons/lu';
import { BsLayerBackward, BsLayerForward } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { HiDownload } from 'react-icons/hi';
import { FaRegSave, FaSpinner } from 'react-icons/fa';
import { FaRegCopy } from 'react-icons/fa6';
import { TiImageOutline } from 'react-icons/ti';

const Toolbar = ({ onFlip, onFlop, onMoveDown, onMoveUp, onRemove, onRemoveAll, onRemoveBg, isRemovingBg, onDownload, onSave, onCopy }) => {
    return (
        <div className={`w-full z-20 h-14 text-sm bg-zinc-100 border-b border-zinc-300`}>
            <div className={`pl-32 pr-20 h-full flex gap-3 items-center`}>
                <button type={`button`} onClick={onFlip} className={`px-3 py-1 flex gap-2 items-center rounded-md hover:bg-zinc-200 ease-in transition-colors`}>
                    <LuFlipHorizontal2 />
                    <p>Flip</p>
                </button>
                <button type={`button`} onClick={onFlop} className={`px-3 py-1 flex gap-2 items-center rounded-md hover:bg-zinc-200 ease-in transition-colors`}>
                    <LuFlipVertical2 />
                    <p>Flop</p>
                </button>
                <div className={`h-6 w-0.5 bg-zinc-300`} />
                <button type={`button`} onClick={onMoveDown} className={`px-3 py-1 flex gap-2 items-center rounded-md hover:bg-zinc-200 ease-in transition-colors`}>
                    <BsLayerBackward />
                    <p>Move Backward</p>
                </button>
                <button type={`button`} onClick={onMoveUp} className={`px-3 py-1 flex gap-2 items-center rounded-md hover:bg-zinc-200 ease-in transition-colors`}>
                    <BsLayerForward />
                    <p>Move Forward</p>
                </button>
                <div className={`h-6 w-0.5 bg-zinc-300`} />
                <button type={`button`} onClick={onCopy} className={`px-3 py-1 flex gap-2 items-center rounded-md hover:bg-zinc-200 ease-in transition-colors`}>
                    <FaRegCopy />
                    <p>Copy</p>
                </button>
                { isRemovingBg ?
                    <div className={`px-3 py-1 flex gap-2 items-center`}>
                        <FaSpinner className={`text-zinc-600 animate-spin`} />
                        <p>Removing...</p>
                    </div>
                    :
                    <button type={`button`} onClick={onRemoveBg} className={`px-3 py-1 flex gap-2 items-center rounded-md hover:bg-zinc-200 ease-in transition-colors`}>
                        <TiImageOutline size={20} />
                        <p>Remove Background</p>
                    </button>
                }
                <button type={`button`} onClick={onRemove} className={`px-3 py-1 flex gap-2 items-center rounded-md hover:bg-zinc-200 ease-in transition-colors`}>
                    <RiDeleteBin6Line />
                    <p>Remove</p>
                </button>
                <button type={`button`} onClick={onRemoveAll} className={`px-3 py-1 flex gap-2 items-center rounded-md hover:bg-zinc-200 ease-in transition-colors`}>
                    <RiDeleteBin6Line />
                    <p>Remove All</p>
                </button>
                <div className={`h-6 w-0.5 bg-zinc-300`} />
                <button type={`button`} onClick={onSave}  className={`px-3 py-1 flex gap-2 items-center rounded-md hover:bg-zinc-200 ease-in transition-colors`}>
                    <FaRegSave />
                    <p>Save Board</p>
                </button>
                <div className={`h-6 w-0.5 bg-zinc-300`} />
                <button type={`button`} onClick={onDownload} className={`px-3 py-1 flex gap-2 items-center bg-blue-500 text-white rounded-md hover:bg-blue-600 ease-in transition-colors`}>
                    <HiDownload />
                    <p>Download PNG</p>
                </button>
            </div>
        </div>
    );
};

export default Toolbar;
