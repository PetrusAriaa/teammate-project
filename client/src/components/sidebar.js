import './style.css';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import AddMission from './items/addMission';
import MissionData from './items/missionData'; 
import DELETE from '../assets/delete.png'
function Sidebar({mission}){
    const [data, setData] = useState([]);
    useEffect(() =>{
        getData();
    }, []);
    const getData = async () =>{
        const response = await axios.get("http://localhost:3001/mission-data");
        setData(response.data);
    }
    
    const handleDeleteAll = async ()=> {
        try {
            await axios.delete("http://localhost:3001/mission-data/");
            window.location.reload(false);
        } catch (err) {
            console.error(err);
        }
    }

    return(
        <div id="mission-editor">
            <p style={{margin:'0', color:'#a0a0a0', paddingTop:'0.5em'}}> Mission Editor </p>
            
            <div id="sidebar">
                <AddMission getMisi={[mission[0], mission[2]]}/>
                <div id="mission-list">
                    <div style={{display:'flex', alignContent:'center', gap:'0.25em'}}>
                        <button id="delete-all" onClick={()=>handleDeleteAll()}><img src={DELETE} style={{height:"20px", paddingTop:'2.5px'}}></img></button>
                        <p>Mission List</p>
                    </div>
                    {
                        data.map(mission_data => {
                            return <MissionData data={[mission_data, mission]} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Sidebar;