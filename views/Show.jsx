import React from "react";

export default function Show({ log }){
    console.log
    return (
        <div>
            <h1>{log.title}</h1>
            <p>{log.createdAt.toString()}</p>
            <p>{log.entry}</p>
            <p>{log.shipIsBroken ? 'The ship is broken' : 'The ship is fine'}</p>

            {
                // super ternary??? if the comments array of the log has any length render this view
                log?.comments?.length?
                <>
                <div>Comments:</div>
                <p>{log.comments.map((comment, i) => 
                    <div key={i} style={{display: 'flex'}}>
                        {comment.user}: {comment.text}
                        <form action={`/comments/${log._id}/${comment._id}?_method=DELETE`} method="POST"><input type="submit" value="X"/></form>
                        <a href={`/comments/${log._id}/${comment._id}`}>+</a>
                    </div>
                )}</p>
                </>
                : ''
            }

            <details>
                <summary style={{ opacity: '.5' }}>Leave a comment:</summary>
                <form action={`/comments/${log._id}`} method="POST">
                    <textarea name="text" id="lc" cols="1" rows="1" />
                    <button>Comment</button>
                </form>
            </details>

            <form action={`/logs/${log._id}/edit`} method="GET">
                    <button>Edit</button>
            </form>
            
            <a href="/logs"><button>Back</button></a>
        </div>
    )
}