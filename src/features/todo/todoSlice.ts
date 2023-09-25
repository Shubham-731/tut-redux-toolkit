import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState: { todos: Todo[] } = {
  todos: [],
}

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      }

      state.todos.push(todo)
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },

    editTodo: (
      state,
      action: { payload: { id: string; updatedText: string } }
    ) => {
      state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.text = action.payload.updatedText
        }
      })
    },
  },
})

export const { addTodo, removeTodo, editTodo } = todoSlice.actions
export default todoSlice.reducer
