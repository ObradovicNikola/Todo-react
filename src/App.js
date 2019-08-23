import React from 'react';
import './App.css';
import TodoItem from './components/TodoItem'
import tasks from './data/todosData'

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      todos: tasks
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id){
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if(todo.id === id) {
          todo.done = !todo.done;
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }

  render(){
    const tasksData = this.state.todos.map(task => {
      return <TodoItem key={task.id} task={task}
                      handleChange={this.handleChange}
      />
    })
    return (
      <div className="todo-list">
        {tasksData}
      </div>
  )}
}

export default App;
