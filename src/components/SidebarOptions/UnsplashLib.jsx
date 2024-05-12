import { Await, useLoaderData } from 'react-router-dom';
import { Suspense } from 'react';

const UnsplashLib = ({ onAdd, stageRef }) => {
    const { unsplashData } = useLoaderData();

    return (
        <div className={`animate-slide-up h-full w-full`}>
            <Suspense fallback={<div>Loading...</div>}>
                <Await resolve={unsplashData}>
                    { ({ images: images })=>
                        <div className={`space-y-10`}>
                            <div className={`px-2 h-lib overflow-y-auto`}>
                                <div className={`grid grid-cols-2 gap-2`}>
                                    <div className={`space-y-2`}>
                                        { images.slice(0, images.length / 2).map(image =>
                                            <img
                                                key={image.id}
                                                src={image.url}
                                                alt={image.alt}
                                                onDragEnd={e => {
                                                    const ref = stageRef.current;
                                                    ref.setPointersPositions(e);

                                                    const coordinate = ref.getPointerPosition();
                                                    coordinate && onAdd(e.timeStamp, image.url, coordinate.x, coordinate.y, e.target.width, e.target.height);
                                                }}
                                            />
                                        )}
                                    </div>
                                    <div className={`space-y-2`}>
                                        { images.slice(images.length / 2).map(image =>
                                            <img
                                                key={image.id}
                                                src={image.url}
                                                alt={image.alt}
                                                onDragEnd={e => {
                                                    const ref = stageRef.current;
                                                    ref.setPointersPositions(e);

                                                    const coordinate = ref.getPointerPosition();
                                                    coordinate && onAdd(e.timeStamp, image.url, coordinate.x, coordinate.y, e.target.width, e.target.height);
                                                }}
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </Await>
            </Suspense>
        </div>
    );
};

export default UnsplashLib;
