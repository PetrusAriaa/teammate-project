
import React, {useEffect, useState} from 'react';
import '../style.css';

function AddMission(){

    const handleClick = () =>{
        alert('button clicked');
    }

    return(
        <div>
            <button id="btnAdd" onClick={() => handleClick()}>Create New Mission</button>
        </div>
    )
}

export default AddMission;