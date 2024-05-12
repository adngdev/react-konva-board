import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import Board from "./pages/Board.jsx";

import libraryLoader from "./loaders/libraryLoader.js";

import DefaultLayout from './layout/DefaultLayout.jsx';

const router = createBrowserRouter(createRoutesFromElements(
    <Route>
        <Route element={<DefaultLayout />}>
            <Route
                index
                element={<Board />}
                loader={libraryLoader}
            />
        </Route>
    </Route>
));

const App = () => <RouterProvider router={router} />;

export default App;
