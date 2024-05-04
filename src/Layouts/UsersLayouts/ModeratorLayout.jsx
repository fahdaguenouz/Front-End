import React from 'react';
import { Outlet } from 'react-router-dom';

const ModeratorLayout = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
}

export default ModeratorLayout;
