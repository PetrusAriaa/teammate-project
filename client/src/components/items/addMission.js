
import React, {useEffect, useState} from 'react';
import '../style.css';

function AddMission({getMisi}){

    const handleClick = () =>{
        var misi = prompt('Mission Name: ');
        getMisi[0](misi)
        getMisi[1](true)
    }

    return(
        <div>
            <button id="btnAdd" onClick={() => handleClick()} title="Add New Mission">Create New Mission</button>
        </div>
    )
}

export default AddMission;