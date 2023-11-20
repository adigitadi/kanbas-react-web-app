import React, { useState, useEffect } from "react";
import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;

function WorkingWithArrays() {
  const [id, setId] = useState(1);
  const [title, setTitle] = useState("Go to work");
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({}); // {id: 1, title: "Go to work"}
  const [errorMessage, setErrorMessage] = useState(null);
  const TODOS_API = `${API_BASE}/a5/todos`;

  const updateTodo = async () => {
    try { await axios.put(
      `${TODOS_API}/${todo.id}`, todo);
    setTodos(todos.map((t) => (
      t.id === todo.id ? todo : t)));
    setTodo({});}
    catch(error) {
        console.log(error);
      setErrorMessage(error.response.data.message);
    }
  };

  const createTodo = async () => {
    const response = await axios.get(`${TODOS_API}/create`);
    setTodos(response.data);
  };

  const postTodo = async () => {
    const response = await axios.post(TODOS_API, {
      title: title,
    });
    setTodos(response.data);
  };

  const fetchTodos = async () => {
    const response = await axios.get(TODOS_API);
    setTodos(response.data);
  };

  const deleteTodo = async (id) => {
    try {
    const response = await axios.delete(`${TODOS_API}/${id}`);
    setTodos(response.data);
    } catch(error) {
        console.log(error);
      setErrorMessage(error.response.data.message);
    }
  };

  const updateTitle = async (id, title) => {
    const response = await axios.get(`${TODOS_API}/${id}/title/${title}`);
    setTodos(response.data);
  };

  const updateDescription = async (id, newDescription) => {
    const response = await axios.post(`${TODOS_API}/${id}/description/${newDescription}`);
    setTodos(response.data);
  };

  const updateCompleted = async (id, newCompleted) => {
    const response = await axios.post(`${TODOS_API}/${id}/completed/${newCompleted}`);
    setTodos(response.data);
  };

  useEffect(() => {
    fetchTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>Working with Arrays</h1>
      <h2>Todos from server</h2>
      <button
        className="btn btn-primary"
        onClick={() => updateTitle(id, title)}
      >
        Update Todo Title
      </button>
      <button className="btn btn-primary" onClick={createTodo}>
        Create Todo
      </button>
      <button className="btn btn-primary" onClick={postTodo}>
        Post Todo
      </button>
      <input
        className="form-control"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            <button
              className="btn btn-danger float-end"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
            <button
              className="btn btn-primary float-end"
              onClick={() => setTodo(todo)}
            >
              Edit
            </button>
            {todo.title}
            <hr />
            {todo.id}
            <label>
              Description:
              <input
                type="text"
                value={todo.description}
                onChange={(e) => {
                  const newDescription = e.target.value;
                  setTodos(todos.map((item) => item.id === todo.id ? { ...item, description: newDescription } : item));
                  updateDescription(todo.id, newDescription);
                }}
              />
            </label>
            <label>
              Completed:
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={(e) => {
                  const newCompleted = e.target.checked;
                  setTodos(todos.map((item) => item.id === todo.id ? { ...item, completed: newCompleted } : item));
                  updateCompleted(todo.id, newCompleted);
                }}
              />
            </label>
          </li>
        ))}
      </ul>
      <h2>Edit Todo(after clicking edit type the new title here)</h2>
      <input
        className="form-control"
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <button className="btn btn-primary" onClick={updateTodo}>
        Save Changes
      </button>
      <h2>Update item title</h2>
      <input
        className="form-control"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <a
        href={`${API_BASE}/a5/todos/${id}/title/${title}`}
        className="btn btn-primary"
      >
        Update Todo Title
      </a>
      <h2>Fetch item by id</h2>

      <input
        className="form-control"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      {errorMessage && (
        <div className="alert alert-danger mb-2 mt-2">
          {errorMessage}
        </div>
      )}
      
    </div>
  );
}

export default WorkingWithArrays;
