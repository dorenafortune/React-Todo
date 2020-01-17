import React from 'react'
import Todo from './Todo'
const TodoList = props => {
    console.log('todo list', props)
    return ( <>

        <div>
            {props.list.map(element => (
                <Todo class = {element.class} id={element.id} item={element} toggle={props.toggle} />
            ))}
        </div>
        </>
    );
};

export default TodoList