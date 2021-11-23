import React from 'react';
import LeftSideBar from '../LeftSideBar/LeftSideBar';
import RightSideBar from '../RightSideBar/RightSideBar';

const HomeContainer = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <LeftSideBar></LeftSideBar>
            <RightSideBar></RightSideBar>
        </div>
    );
};

export default HomeContainer;