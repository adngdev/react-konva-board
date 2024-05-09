import { useFetcher } from "react-router-dom";
import { useEffect } from "react";

const UnsplashLib = () => {
    const fetcher = useFetcher();

    useEffect(() => {
        fetcher.load(`/menu/unsplash`);
    }, []);

    return (
        <div className={`h-full p-5 w-96 bg-slate-600 rounded-r-lg`}>
            { !fetcher.data ?
                <div>
                    Loading Spinner...
                </div>
                :
                <div className={`space-y-10`}>
                    <div className={`relative flex items-center`}>
                        <input type={`text`} className={`pl-10 py-2 w-full`} placeholder={`Search Image...`} />
                    </div>
                    <div className={`px-2 h-lib overflow-y-auto`}>
                        <div className={`grid grid-cols-2 gap-2`}>
                            { fetcher.data.data.images?.map(image =>
                                <img key={image.id} src={image.url} alt={`abc`} />
                            )}
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default UnsplashLib;
