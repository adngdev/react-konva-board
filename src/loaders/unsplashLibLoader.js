import { defer } from "react-router-dom";

import { createApi } from "unsplash-js";

const unsplashLibLoader = async () => defer({
    data: new Promise((resolve, reject) => {
        const api = createApi({
            accessKey: import.meta.env.VITE_UNSPLASH_ACCESS_KEY,
        });

        api.photos
            .list({})
            .then(response => {
                const images = response.response.results.map(image => ({
                    id: image.id,
                    url: image.urls.regular,
                }));

                resolve({ images });
            })
            .catch(error => reject(error));
    })
});

export default unsplashLibLoader;

