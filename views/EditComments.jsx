import React from 'react'


function Edit(props) {
    return ( 
        <div>
            <h1>Edit Comment</h1>
            <div className='buttons' style={{ flexDirection: 'column' }}>
                <form action={`/comments/${props.logId}/${props.comment._id}?_method=PUT`} method="POST">

                    <label htmlFor="clr">Body:</label><br />
                    <textarea name="text" id="clr" cols="30" rows="10" defaultValue={props.comment.text} /><br /><br />

                    <button>Submit</button>
                </form>
                <form action={`/logs/${props.logId}`}>
                    <button>Back</button>
                </form>
            </div>
        </div>
    );
}

export default Edit;