import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var todos = [
  {
    title: 'First todo',
    responsible: 'Sean',
    description: 'This is my first description and it says stuff',
    priority: 'low'
  },
  {
    title: 'Second todo',
    responsible: 'Donald',
    description: 'This says stuff about the second thing',
    priority: 'high'
  },
  {
    title: 'Third todo',
    responsible: 'John',
    description: 'For the third time...',
    priority: 'medium'
  }
]

class App extends Component{

  constructor(props) {
    super(props);

    this.state = {
      todos
    };
  }

  handleRemoveTodo(index) {
    this.setState({
      todos: this.state.todos.filter(function(e, i) {
        return i !== index;
      })
    })
  }

  render() {
    return (
      <div className="container">
        <Input></Input>
        <hr />
        <h4>Todo Count: <span className="badge">{this.state.todos.length}</span></h4>
        <ul className="list-group">
          {this.state.todos.map((todo, index) =>
            <li className="list-group-item" key={index}>
              <h4 className="list-group-item-heading"> {todo.title} <small><span className="label label-info">{todo.priority}</span></small></h4>

              <p><span className="glyphicon glyphicon-user"></span> {todo.responsible}</p>

              <p>{todo.description}</p>

              <button className="btn btn-danger btn-sm" onClick={this.handleRemoveTodo.bind(this, index)}><span className="glyphicon glyphicon-trash"> Delete</span></button>
            </li>
          )}
        </ul>
      </div>

    );
  }
}
// Input fields
class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      responsible: '',
      description: '',
      priority: 'Lowest'
    }
  }

    render() {
      return (
        <div>
          <h4>Add New Todo</h4>
          <form className="form-horizontal" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="inputTodoTitle" className="col-sm-2 control-label">To-Do</label>
              <div className="col-sm-10">
                <input  name="todoTitle"
                        type="text"
                        className="form-control"
                        id="inputTodoTitle"
                        value={this.state.title}
                        onChange={this.handleInputChange}
                        placeholder="Title"></input>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputTodoResponsible" className="col-sm-2 control-label">Responsible</label>
              <div className="col-sm-10">
                <input  name="todoResponsible"
                        type="text"
                        className="form-control"
                        id="inputTodoResponsible"
                        value={this.state.responsible}
                        onChange={this.handleInputChange}
                        placeholder="Responsible"></input>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputTodoDescription" className="col-sm-2 control-label">Description</label>
              <div className="col-sm-10">
                <textarea name="todoDescription"
                          type="text"
                          className="form-control"
                          id="inputTodoDescription"
                          value={this.state.description}
                          onChange={this.handleInputChange}
                          placeholder="Description"></textarea>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputTodoPriority" className="col-sm-2 control-label">Priority</label>
              <div className="col-sm-10">
                <select name="todoPriority"
                        className="form-control"
                        id="inputTodoPriority"
                        value={this.state.priority}
                        onChange={this.handleInputChange}>
                  <option>Lowest</option>
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                  <option>Highest</option>
                </select>
              </div>
            </div>
          </form>
        </div>
      )
    }
}

export default App;
