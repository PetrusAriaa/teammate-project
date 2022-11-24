import Map from './map';
import Sidebar from './sidebar';
import React, { useEffect, useState } from 'react';


function Body() {
    
    const [jsonData, setJsonData] = useState()
    const [missionName, setMissionName] = useState()

    const getJsonData = (data) => {
        setJsonData(data);
    }

    const getMissionName = (name) =>{
        setMissionName(name);
    }
    return (
        <div>
            <div class="body" style={{ display: 'flex' }}>
                <Sidebar getMissionName={getMissionName}/>
                <Map missionName={missionName}/>
            </div>
        </div>
    )
}

export default Body;