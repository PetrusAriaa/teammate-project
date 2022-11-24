import Map from './map';
import Sidebar from './sidebar';
import React, { useEffect, useState } from 'react';


function Body() {

    return (
        <div>
            <div class="body" style={{ display: 'flex' }}>
                <Sidebar />
                <Map />
            </div>
        </div>
    )
}

export default Body;