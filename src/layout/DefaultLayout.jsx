import { Outlet } from 'react-router-dom';

import Navbar from '../components/Navbar/Navbar.jsx';

const DefaultLayout = () => {
    return (
        <div className={`relative`}>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default DefaultLayout;
