import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { destroyComplatedTodos, setFilterType, selectTodos, selectActiveFilter } from "../redux/todo/todoSlice"

export default function ContentFooter() {
  const itemsLength = useSelector(selectTodos).length
  const activeFilter = useSelector(selectActiveFilter)
  const dispatch = useDispatch()
  return (
    <footer className="footer">
      {itemsLength > 0 && (
        <span className="todo-count">
          <strong>{itemsLength}</strong> items left
        </span>
      )}

      <ul className="filters">
        <li>
          <a
            onClick={() => dispatch(setFilterType("all"))}
            className={activeFilter === "all" ? "selected" : ""}
          >
            All
          </a>
        </li>
        <li>
          <a
            onClick={() => dispatch(setFilterType("active"))}
            className={activeFilter === "active" ? "selected" : ""}
          >
            Active
          </a>
        </li>
        <li>
          <a
            onClick={() => dispatch(setFilterType("complated"))}
            className={activeFilter === "complated" ? "selected" : ""}
          >
            Completed
          </a>
        </li>
      </ul>

      <button
        onClick={() => dispatch(destroyComplatedTodos())}
        className="clear-completed"
      >
        Clear completed
      </button>
    </footer>
  )
}
