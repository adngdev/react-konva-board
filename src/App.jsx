import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import Board from "./pages/Board.jsx";

import unsplashLibLoader from "./loaders/unsplashLibLoader.js";

import UnsplashLib from "./components/SidebarOptions/UnsplashLib.jsx";

const router = createBrowserRouter(createRoutesFromElements(
    <Route>
        <Route
            index
            element={<Board />}
        />
        <Route path={`menu`}>
            <Route
                index
                path={`unsplash`}
                element={<UnsplashLib />}
                loader={unsplashLibLoader}
            />
        </Route>
    </Route>
));

const App = () => <RouterProvider router={router} />;

export default App;
