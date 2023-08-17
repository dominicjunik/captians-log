import React from "react";

export default function Show({ log }){
    return (
        <div>
            <h1>{log.title}</h1>
            <p>{log.createdAt.toString()}</p>
            <p>{log.entry}</p>
            <p>{log.isShipBroken ? 'The ship is broken' : 'The ship is fine'}</p>
            
            <a href="/logs"><button>Back</button></a>
        </div>
    )
}