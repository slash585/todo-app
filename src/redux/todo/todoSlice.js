import { createSlice } from "@reduxjs/toolkit"

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    items: [
      {
        id: 1,
        title: "Learn React",
        complated: true,
      },
      {
        id: 2,
        title: "Read a book",
        complated: false,
      },
    ],
    activeFilter: "all",
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload)
    },
    toggle: (state, action) => {
      const { id } = action.payload
      const item = state.items.find((item) => item.id === id)
      item.complated = !item.complated
    },
    destroyTodo: (state, action) => {
      const { id } = action.payload
      const filtered = state.items.filter((item) => item.id !== id)
      state.items = filtered
    },
    destroyComplatedTodos: (state, action) => {
      const filtered = state.items.filter((item) => !item.complated)
      state.items = filtered
    },
    setFilterType: (state, action) => {
      state.activeFilter = action.payload
    },
  },
})

export const {
  addTodo,
  toggle,
  destroyTodo,
  destroyComplatedTodos,
  setFilterType,
} = todoSlice.actions
export default todoSlice.reducer
