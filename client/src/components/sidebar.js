import './style.css';
import React, {useEffect, useState} from 'react';
import AddMission from './items/addMission';
function Sidebar(){
    
    return(
        <div id="mission-editor">
            <p> Mission Editor </p>
            
            <div id="sidebar">
                <AddMission />
                <div id="mission-list">
                    <p>Mission List</p>
                    <ul>
                        <li>Mission 1</li>
                        <li>Mission 2</li>
                        <li>Mission 3</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Sidebar;