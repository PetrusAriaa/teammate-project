import React from "react";

function MissionData(data) {
    return (
        <div style={{
            borderBottom: '#6c6c6c 1px solid',
            fontSize: '0.9em',
        }}>
            <p style={{
                margin: '0',
                padding: '0.5em'
            }}>{data.data.namaMisi}</p>
        </div>
    )
}
export default MissionData;