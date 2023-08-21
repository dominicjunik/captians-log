import React from "react";

export default function Index({ logs }){
    return (
        <div>
            <h1>Captians Log</h1>
            <ul>
                {logs.map((log) => 
                <li key={log._id}>
                    <a href={`/logs/${log._id}`}>
                        {log.title} 
                    </a>
                    <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                        <button>X</button>
                    </form>
                    <form action={`/logs/${log._id}/edit`} method="GET">
                        <button>Edit</button>
                    </form>
                </li>)}
            </ul>

            <a href="logs/new"><button>Create</button></a>
        </div>
    )
}