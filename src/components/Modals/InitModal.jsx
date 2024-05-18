const InitModal = ({ isShown, setShow, onInit }) => {
    const handleLoad = data => {
        onInit(data);
        setShow(false);
    };

    return (
        <div>
            <div onClick={() => setShow(false)} className={`${isShown ? `inset-0 opacity-100` : `inset-auto opacity-0`} absolute z-20 bg-zinc-800/50 backdrop-blur-md transition-opacity duration-300 transform-gpu`} />
            <div className={`${isShown ? `block` : `hidden`} fixed inset-0 z-20 m-auto px-3 py-5 space-y-4 w-1/3 max-w-md xl:max-w-xl h-fit text-zinc-800 rounded-xl bg-zinc-100 shadow-lg`}>
                <div className={`space-y-2`}>
                    <p className={`text-lg font-medium`}>Seem like you have a on-going board</p>
                    <p className={`text-sm`}>Do you want to start a new one?</p>
                </div>
                <div className={`space-y-2`}>
                    <button type={`button`} onClick={() => handleLoad(JSON.parse(localStorage.getItem('data')))} className={`w-full py-2 bg-zinc-400 text-white rounded-md hover:bg-zinc-600 active:scale-95 transition-all transform-gpu`}>Continue</button>
                    <button type={`button`} onClick={() => handleLoad([])}  className={`w-full py-2 bg-red-400 text-white rounded-md hover:bg-red-600 active:scale-95 transition-all transform-gpu`}>Start New Board</button>
                </div>
            </div>
        </div>
    );
};

export default InitModal;
