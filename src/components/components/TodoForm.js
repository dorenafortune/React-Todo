import React from 'react'

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            inputInfo: ""
        }
    }
    handleRemove = (e) => {
        console.log('remove')
        e.preventDefault()
        this.props.clear()
    }
    render() {


        return (
            <div>
                <form>
                    <input placeholder="hi" />
                    <button>Add Todo</button>
                    <button onClick={this.handleRemove}>Clear List</button>
                </form>


            </div>
        )

    }
}

export default TodoForm 