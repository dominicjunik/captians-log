import React from "react";

export default function New() {
    return(
        <div>
            <form action="/logs" method="POST">
                <label htmlFor="title">Title:</label>
                <input type="text" id='title' name='title' />

                <label htmlFor="entry">Entry:</label>
                <input type="textarea" name="entry" id="entry" />

                <label htmlFor="shipIsBroken">Ship is broken:</label>
                <input type="checkbox" id="shipIsBroken" name='shipIsBroken'/>
                
                <input type="submit" value='Submit'/>
            </form>
        </div>
    )
}