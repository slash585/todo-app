import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/todo/todoSlice'
import { nanoid } from '@reduxjs/toolkit'

export default function Form() {
  const [title, setTitle] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addTodo({id: nanoid(10), title: title, complated: false}))
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit}>
    <input
      className="new-todo"
      placeholder="What needs to be done?"
      autoFocus
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />
  </form>
  )
}
