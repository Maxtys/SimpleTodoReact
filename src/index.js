import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

class TodoInput extends React.Component {
  state = {
    value: "1111"
  };
  render() {
    return (
      <div>
        <input
          class="form-control"
          value={this.state.value}
          onChange={event => {
            this.setState({ value: event.target.value });
          }}
        />
        <button
          class="btn btn-primary btn-lg"
          onClick={() => {
            this.props.onAddItem(this.state.value);
            this.setState({ value: "" });
          }}
        >
          Add
        </button>
      </div>
    );
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <div>
        <ul class="list-group">{this.props.children}</ul>
      </div>
    );
  }
}

class TodoItem extends React.Component {
  render() {
    return <li class="list-group-item">{this.props.text}</li>;
  }
}

class App extends React.Component {
  state = {
    todos: ["item1", "item2", "item3"]
  };
  render() {
    return (
      <div>
        <TodoInput
          onAddItem={item => {
            this.setState({ todos: this.state.todos.concat(item) });
          }}
        />
        <TodoList>
          {this.state.todos.map(todo => (
            <TodoItem text={todo} />
          ))}
        </TodoList>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
