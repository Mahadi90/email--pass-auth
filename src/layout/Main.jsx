import React from 'react';
import { Outlet } from 'react-router-dom';
import Hedaer from '../components/Hedaer';

const Main = () => {
    return (
        <div>
            <Hedaer/>
            <Outlet/>
        </div>
    );
};

export default Main;