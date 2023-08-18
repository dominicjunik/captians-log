import React from 'react'

const Edit = ({ log }) => {
  return (
    <div>
        <h1>Edit</h1>
        <form action={`/logs/${log._id}?_method=PUT`} method="POST">
                <label htmlFor="title">Title:</label>
                <input type="text" id='title' name='title' value={log.title}/>

                <label htmlFor="entry">Entry:</label>
                <input type="textarea" name="entry" id="entry"  value={log.entry}/>

                <label htmlFor="shipIsBroken">Ship is broken:</label>
                <input type="checkbox" id="shipIsBroken" name='shipIsBroken'  checked={ log.shipIsBroken ? true : false}/>
                
                <input type="submit" value='Submit'/>
            </form>
            <form action={`/logs/${log._id}`} method="GET">
                        <button>Back</button>
            </form>
    </div>
  )
}

export default Edit
