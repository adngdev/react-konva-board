const textFonts = [
    { fontName: 'monospace', styling: 'font-monospace' },
    { fontName: 'courier', styling: 'font-courier' },
    { fontName: 'calibri', styling: 'font-calibri' },
    { fontName: 'tahoma', styling: 'font-tahoma' },
    { fontName: 'Trebuchet MS', styling: 'font-trebuchet' },
    { fontName: 'cursive', styling: 'font-cursive' },
    { fontName: 'Impact', styling: 'font-impact' },
    { fontName: 'Georgia', styling: 'font-georgia' }
];

const TextLib = ({ onAdd, stageRef }) => {
    return (
        <div className={`animate-slide-up transition-all w-full h-full p-5 space-y-3`}>
            <div className={`p-2 h-lib overflow-y-auto`}>
                <div className={`grid grid-cols-2 gap-2`}>
                    { textFonts.map(({fontName, styling}) =>
                        <p
                            key={fontName}
                            className={`relative px-2 py-2 text-lg ${styling} text-center border border-zinc-300 rounded-xl`}
                            draggable={true}
                            onDragEnd={(e) => {
                                const ref = stageRef.current;
                                ref.setPointersPositions(e);
                                const coordinate = ref.getPointerPosition();

                                coordinate && onAdd(e.timeStamp, fontName, coordinate.x, coordinate.y);
                            }}
                        >
                            Insert Text
                            <span className={`absolute -top-1.5 left-2 w-fit text-2xs bg-slate-50`}>{fontName}</span>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TextLib;
