import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Todo.js";
import TodoForm from "./components/TodoForm.js";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="todo-app">
      <TodoList />
    </div>
  );
}

export default App;
