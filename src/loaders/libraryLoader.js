import { defer } from "react-router-dom";

import { createApi } from "unsplash-js";

const libraryLoader = async () => defer({
    unsplashData: new Promise((resolve, reject) => {
        const api = createApi({
            accessKey: import.meta.env.VITE_UNSPLASH_ACCESS_KEY,
        });

        api.photos
            .list({ perPage: 20 })
            .then(response => {
                const images = response.response.results.map(image => ({
                    id: image.id,
                    url: image.urls.regular,
                    alt: image.alt_description
                }));

                resolve({ images });
            })
            .catch(error => reject(error));
    }),
    pinterestData: new Promise((resolve, reject) => {
    }),
});

export default libraryLoader;
