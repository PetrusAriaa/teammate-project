import Map from './map';
import Sidebar from './sidebar';
import React, { useEffect, useState } from 'react';


function Body() {
    
    const [namaMisi, setNamaMisi] = useState()

    const getMissionName = (missionName) => {
        setNamaMisi(missionName);
    }


    return (
        <div>
            <div class="body" style={{ display: 'flex' }}>
                <Sidebar getMissionName={getMissionName} />
                <Map missionName={namaMisi}/>
            </div>
        </div>
    )
}

export default Body;