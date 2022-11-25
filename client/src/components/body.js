import Map from './map';
import Sidebar from './sidebar';
import React, { useEffect, useState } from 'react';


function Body() {
    
    const [jsonData, setJsonData] = useState()
    const [missionName, setMissionName] = useState()
    const [missionId, setMissionId] = useState()
    const [isNew, setIsNew] =useState(false)

    const getNewStatement = (e) =>{
        setIsNew(e)
        if(e == true){
            setMissionId(null)
            setJsonData(null)
        }
    }
    const getJsonData = (data) => {
        var json = JSON.parse(data.geoJSON)
        setJsonData(json);
        var id = data.id;
        setMissionId(id);
    }
    
    const getMissionName = (name) =>{
        setMissionName(name);
    }
    return (
        <div>
            <div class="body" style={{ display: 'flex' }}>
                <Sidebar mission={[getMissionName, getJsonData, getNewStatement]}/>
                <Map missionData={[missionName, missionId, jsonData, isNew]}/>
            </div>
        </div>
    )
}

export default Body;