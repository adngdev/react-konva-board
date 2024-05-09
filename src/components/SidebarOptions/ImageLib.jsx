import { HiOutlineChevronLeft } from 'react-icons/hi';

const imgUrl = [
    'https://plus.unsplash.com/premium_photo-1664303847960-586318f59035?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGNhcnxlbnwwfHwwfHx8MA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1682125840276-f47b511bf58c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhcnxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1502489597346-dad15683d4c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGNhcnxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGNhcnxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1542228262-3d663b306a53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGNhcnxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1598586958772-8bf368215c2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGNhcnxlbnwwfHwwfHx8MA%3D%3D'
]

const ImageLib = ({ handleClose, onAdd, stageRef }) => {
    return (
        <div className={`relative p-5 w-96 space-y-10 bg-slate-600 rounded-r-lg`}>
            <div className={`relative flex items-center`}>
                <input type={`text`} className={`pl-10 py-2 w-full`} placeholder={`Search Image...`} />
            </div>
            <button onClick={handleClose} className={`absolute -right-2 top-1/2 h-20 bg-slate-600 rounded-lg text-zinc-500 hover:text-zinc-50 transition-colors`}>
                <HiOutlineChevronLeft size={15} />
            </button>
            <div className={`px-2 h-lib overflow-y-auto`}>
                <div className={`grid grid-cols-2 gap-2`}>
                    { imgUrl.map((url, i) =>
                        <img
                            key={i} src={url} alt={`Image`} className={`cursor-pointer bg-black hover:opacity-70 transition-opacity`}
                            onDragEnd={e => {
                                const ref = stageRef.current;
                                ref.setPointersPositions(e);

                                const coordinate = ref.getPointerPosition();
                                coordinate && onAdd(e.timeStamp, url, coordinate.x, coordinate.y, e.target.naturalWidth, e.target.naturalHeight);
                            }}
                        />
                    )}
                </div>
            </div>



        </div>
    );
};

export default ImageLib;