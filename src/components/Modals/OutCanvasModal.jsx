import { toast } from 'sonner';

const OutCanvasModal = ({ isShown, setShow, onMoveEnd, onRemove, selectedItem }) => {
    const handleClose = () => {
        onRemove();
        setShow(false);
        toast.info('The item was removed from canvas');
    };

    const handleKeep = () => {
        onMoveEnd(selectedItem.id, 500, 300);
        setShow(false);
        toast.info('The item was added back to canvas');
    };

    return (
        <div>
            <div onClick={handleClose} className={`${isShown ? `inset-0 opacity-100` : `inset-auto opacity-0`} absolute z-20 bg-zinc-800/50 backdrop-blur-md transition-opacity duration-300 transform-gpu`} />
            <div className={`${isShown ? `block` : `hidden`} fixed inset-0 z-20 m-auto px-3 py-5 space-y-4 w-1/3 max-w-md xl:max-w-xl h-fit text-zinc-800 rounded-xl bg-zinc-100 shadow-lg`}>
                <div className={`space-y-2`}>
                    <p className={`text-lg font-medium`}>This item was moved outside the canvas</p>
                    <p className={`text-sm`}>Do you want to keep it?</p>
                    <div className={`flex justify-center`}>
                        { selectedItem.type === 'IMAGE' ?
                            <div className={`w-96 h-72 overflow-hidden rounded-md`}>
                                { selectedItem.image ?
                                    <img className={`w-full h-full object-contain`} src={selectedItem.image} alt={selectedItem.name} />
                                    :
                                    <div className={`w-full h-full flex justify-center items-center`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                        </svg>
                                    </div>
                                }
                            </div>
                            :
                            <p className={`px-1 py-3 text-2xl rounded-md`}>{selectedItem.text}</p>
                        }
                    </div>
                    <div className={`space-y-2`}>
                        <button type={`button`} onClick={handleKeep} className={`w-full py-2 bg-blue-400 text-white rounded-md hover:bg-blue-600 active:scale-95 transition-all transform-gpu`}>Keep Item</button>
                        <button type={`button`} onClick={handleClose} className={`w-full py-2 bg-red-400 text-white rounded-md hover:bg-red-600 active:scale-95 transition-all transform-gpu`}>Remove Item</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OutCanvasModal;
