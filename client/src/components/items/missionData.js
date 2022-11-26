import React, {useState} from "react";
import axios from 'axios';
import '../style.css';
import trash from '../../assets/trash.png';
import load from '../../assets/load.png';
import rename from '../../assets/rename.png';

function MissionData(data) {
    const handleDelete = async () =>{
        try{
            await axios.delete("http://localhost:3001/mission-data/" + data.data[0].id);
            window.location.reload(false);
        }catch(err){
            console.error(err);
        }
    }
    
    const [namaMisi, setNamaMisi] = useState(data.data[0].namaMisi);

    const handleLoad = () =>{
        var name = data.data[0].namaMisi;
        data.data[1][0](name);
        var json = data.data[0];
        data.data[1][1](json);
        data.data[1][2](false);
    }
    
    const handleRename = async () =>{
        
        var newName = prompt('Rename Mission: ');
        if (newName != '' && newName != null){
            data.data[1][0](newName);
            setNamaMisi(newName)
            try {
                await axios.patch("http://localhost:3001/mission-data/" + data.data[0].id, {
                    namaMisi: newName
                })
            }catch (err) {
                console.error(err);
            }
            window.location.reload();
        }
        
    }

    //* TO DO: Bikin sistem rename buat misinya
    return (
        <div id="mission-data" style={{
            borderBottom: '#6c6c6c 1px solid',
            fontSize: '0.9em',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            }}>
            
            <div id="nama-misi" style={{display:'flex', gap:'0'}}>
            <p style={{
                margin: '0',
                padding: '0.5em'
            }}>{data.data[0].namaMisi}</p>
            <button id="btnRename" onClick={()=> handleRename()} title="Rename Mission"><img src={rename} style={{height:'10pt'}}></img></button>
            </div>

            <div id="buttons" style={{display:'flex'}}>
                <button onClick={()=> handleLoad()} title="Load Mission"><img src={load} style={{height:'10pt'}}></img></button>
                <button onClick={() => handleDelete()} title="Delete Mission"><img src={trash} style={{height:'10pt'}}></img></button>
            </div>

        </div>
    )
}
export default MissionData;