import './style.css';
import React, {useEffect, useState} from 'react';

function Sidebar(){
    
    return(
        <div id="mission-editor">
            <p> Mission Editor </p>
            
            <div id="sidebar">
                <p>Mission List</p>
                <div id="mission-list">
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