import { Usercontext } from '@/Context/AuthProvider';
import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const StandarLayout = () => {
    const navigate = useNavigate()

    const { logout, authenticated, loading } = Usercontext()
    useEffect(() => {
        if (!authenticated) {
            
            navigate('/login')
        }
    }, [authenticated])
    return (
        <div>
            <Outlet/>
        </div>
    );
}

export default StandarLayout;
