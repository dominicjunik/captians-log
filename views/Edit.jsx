import React from 'react'

const Edit = ({ log }) => {
  return (
    <div>
        <h1>Edit</h1>
        <form action={`/logs/${log._id}?_method=PUT`} method="POST">
                <label htmlFor="title">Title:</label><br />
                <input type="text" id='title' name='title' value={log.title}/><br /><br />

                <label htmlFor="entry">Entry:</label><br />
                <input type="textarea" name="entry" id="entry"  value={log.entry}/><br /><br />

                <label htmlFor="shipIsBroken">Ship is broken:</label><br />
                <input type="checkbox" id="shipIsBroken" name='shipIsBroken'  checked={ log.shipIsBroken ? true : false}/> <br /><br />
                
                <input type="submit" value='Submit'/>
            </form>
            <form action={`/logs/${log._id}`} method="GET">
                        <button>Back</button>
            </form>
    </div>
  )
}

export default Edit
