import './style.css';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import AddMission from './items/addMission';
import MissionData from './items/missionData'; 
function Sidebar({getMissionName}){
    const [data, setData] = useState([]);

    useEffect(() =>{
        getData();
    }, []);

    const getData = async () =>{
        const response = await axios.get("http://localhost:3001/mission-data");
        setData(response.data);
    }

    return(
        <div id="mission-editor">
            <p style={{margin:'0', color:'#a0a0a0', paddingTop:'0.5em'}}> Mission Editor </p>
            
            <div id="sidebar">
                <AddMission getMisi={getMissionName}/>
                <div id="mission-list">
                    <p>Mission List</p>
                    {
                        data.map(mission_data => {
                            return <MissionData data={mission_data} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Sidebar;