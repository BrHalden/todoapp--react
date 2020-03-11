import React from 'react';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="mainheader">
          <h1 className="pagetitle">Todo App</h1>
      </header>
      <main>
          <TodoAddForm />

          <TodoList />
      </main> 
      <footer className="mainfooter">
          Noroff &copy; 2020
      </footer>
    </div>
  );
}

export default App;


function TodoItem(props) {
  return (
      <div className="todoitem todoitem--completed" data-taskid="">
          <button className="todoitem__description todoitem__completedtoggle"
              data-toggleid="">
              Go to the shops
          </button>
          <button className="todoitem__remove" data-removeid="">
              Remove
          </button>
      </div>
  );
}

function TodoListItem(props) {
  return (
      <li className="todolist__item">
          <TodoItem />
      </li>
  );
}

function TodoList(props) {
  return (
      <ul className="todolist">
          <TodoListItem />
      </ul>
  );
}

function TodoAddForm(props) {
  return (
      <form className="todoaddform">
          <input type="text" name="todoItemDescription" placeholder="Enter a task..."
              className="todoaddform__description" />
          <button type="submit" className="todoaddform__submit">
              Add
          </button>
      </form>
  );
}
