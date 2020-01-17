import React from 'react';
import TodoList from './components/components/TodoList'
import TodoForm from './components/components/TodoForm'
import todo from './components/components/Todo';

const todos = [
  {
    task: 'Organize Garage',
    id: 1,
    completed: false,
    class: "incomplete"
  },
  {
    task: 'Bake Cookies',
    id: 2,
    completed: false,
    class: "incomplete"
  },
  {
    task: 'Bathe Dog',
    id: 3,
    completed: false,
    class: "incomplete"
  },
  {
    task: 'Clean Snake Tank',
    id: 4,
    completed: false,
    class: "incomplete"    

  },
  {
    task: 'Defrost Rat',
    id: 5,
    completed: false,
    class: "incomplete"    

  },
  {
    task: 'Feed Snake and Dog',
    id: 6,
    completed: false,
    class: "incomplete"    

  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoList: todos,
      completed: [],
      search: [],
    }
  }

  

  toggle = id => {
    this.setState({
      todoList: this.state.todoList.map(e => {
        console.log(e.id)
       if (id == e.id ) {
         e.completed = !e.completed
       if (e.completed === true ){
        e.class = "complete" 
       } else {
         e.class = "incomplete"
       }
       } else {
        return e
       }
       
      })
    })

   
    // const newTodoItem = this.state.todoList.map(item => {

    //   if (item.id === id) {
    //     return {
    //       ...item,
    //       completed: !item.completed
    //     }
    //   } else {
    //     return item;
    //   }

    // })
    // this.setState({
    //   todoList: newTodoItem
    // })

  }
  

  clearBtnHandler = () => {
    this.setState({
      todoList: this.state.todoList.filter(element => !element.completed)
    })
  }

  render() {
    // console.log('are you rendering?')
    console.log("state", this.state)
    return (
      <div>
         <div>
          <h2>Welcome to your Todo App</h2>
        </div>
        <TodoForm clear={this.clearBtnHandler}/>
        <TodoList list={this.state.todoList} toggle={this.toggle} /> 
      </div>
    );
  }
}

export default App;
