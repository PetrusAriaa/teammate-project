import React, {useState} from "react";
import axios from 'axios';
import '../style.css';
import trash from '../../assets/trash.png';
import load from '../../assets/load.png';

function MissionData(data) {
    const handleDelete = async () =>{
        try{
            await axios.delete("http://localhost:3001/mission-data/" + data.data[0].id);
            window.location.reload(false);
        }catch(err){
            console.error(err);
        }
    }
    
    const handleLoad = () =>{
        var name = data.data[0].namaMisi;
        data.data[1][0](name);
        var json = data.data[0];
        data.data[1][1](json);
        data.data[1][2](false);
    }

    return (
        <div id="mission-data" style={{
            borderBottom: '#6c6c6c 1px solid',
            fontSize: '0.9em',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            }}>

            <p style={{
                margin: '0',
                padding: '0.5em'
            }}>{data.data[0].namaMisi}</p>

            <div id="buttons" style={{display:'flex'}}>
                <button onClick={()=> handleLoad()} title="Load Mission"><img src={load} style={{height:'10pt'}}></img></button>
                <button onClick={() => handleDelete()} title="Delete Mission"><img src={trash} style={{height:'10pt'}}></img></button>
            </div>

        </div>
    )
}
export default MissionData;