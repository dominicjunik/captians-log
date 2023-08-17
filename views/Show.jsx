import React from "react";

export default function Show({ log }){
    console.log
    return (
        <div>
            <h1>{log.title}</h1>
            <p>{log.createdAt.toString()}</p>
            <p>{log.entry}</p>
            <p>{log.shipIsBroken ? 'The ship is broken' : 'The ship is fine'}</p>
            <form action={`/logs/${log._id}/edit`} method="GET">
                    <button>Edit</button>
            </form>
            
            <a href="/logs"><button>Back</button></a>
        </div>
    )
}