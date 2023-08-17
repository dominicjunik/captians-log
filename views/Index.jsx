import React from "react";

export default function Index({ logs }){
    return (
        <div>
            <h1>'index'</h1>
            <ul>
                {logs.map((log) => <li key={log._id}>{log.title}</li>)}
            </ul>

            <a href="logs/new"><button>Create</button></a>
        </div>
    )
}