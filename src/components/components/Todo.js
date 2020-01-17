import React from 'react'

const Todo = (props) => {
    return (
        <div className={props.item.class} id = {props.item.id} onClick = {evt => props.toggle(evt.target.id)}   >
           

            {props.item.task}

        </div>

    )

}

export default Todo