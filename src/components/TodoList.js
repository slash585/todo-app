import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { toggle, destroyTodo } from "../redux/todo/todoSlice"

let filtered = []

function TodoList() {
  const items = useSelector((state) => state.todos.items)
  const activeFilter = useSelector((state) => state.todos.activeFilter)
  const dispatch = useDispatch()

  filtered = items

  if (activeFilter !== "all") {
    filtered = items.filter((todo) =>
      activeFilter === "active"
        ? todo.complated === false
        : todo.complated === true
    )
  }

  return (
    <ul className="todo-list">
      {filtered.map((item) => (
        <li key={item.id} className={item.complated ? "completed" : ""}>
          <div className="view">
            <input
              className="toggle"
              checked={item.complated}
              onChange={() => dispatch(toggle({ id: item.id }))}
              type="checkbox"
            />
            <label>{item.title}</label>
            <button
              onClick={() => dispatch(destroyTodo({ id: item.id }))}
              className="destroy"
            ></button>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
