import React from "react";

export default function New() {
    return(
        <div>
            <form action="/logs" method="POST">
                <label htmlFor="title">Title:</label><br />
                <input type="text" id='title' name='title' /><br /><br />

                <label htmlFor="entry">Entry:</label><br />
                <input type="textarea" name="entry" id="entry" /><br /><br />

                <label htmlFor="shipIsBroken">Ship is broken:</label><br />
                <input type="checkbox" id="shipIsBroken" name='shipIsBroken'/><br /><br />
                
                <input type="submit" value='Submit'/>
            </form>
        </div>
    )
}