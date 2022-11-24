import React, {useState} from "react";
import '../style.css';

function MissionData(data) {

    const handleDelete = () =>{
    }
    
    const handleLoad = () =>{
        var name = data.data[0].namaMisi;
        data.data[1](name);
        var json = JSON.parse(data.data[0].geoJSON);
        console.log(json);
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
            <div style={{display:'flex', gap: '0.5em'}}>
                <button style={{}} onClick={()=>handleDelete()}>delete</button>
                <button style={{}} onClick={()=> handleLoad()}>load</button>
            </div>
        </div>
    )
}
export default MissionData;