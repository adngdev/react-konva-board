import { Outlet } from 'react-router-dom';

import { Toaster } from 'sonner';

import Navbar from '../components/Navbar/Navbar.jsx';

const DefaultLayout = () => {
    return (
        <div className={`relative`}>
            <Navbar />
            <Outlet />
            <Toaster
                position={'top-center'}
                toastOptions={{
                    classNames: {
                        error: 'text-white bg-red-400',
                        success: 'text-white bg-green-400',
                        warning: 'text-white bg-yellow-400',
                        info: 'text-white bg-blue-400',
                    },
                }}
            />
        </div>
    );
};

export default DefaultLayout;
