import { FormEvent, useState, useRef } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "@/features/todo/todoSlice"

const AddTodo = () => {
  const [inputValue, setInputValue] = useState("")
  const dispatch = useDispatch()
  const formRef = useRef<HTMLFormElement>(null)

  const addTodoHandler = (e: FormEvent) => {
    e.preventDefault()

    dispatch(addTodo(inputValue))

    setInputValue("")
  }

  return (
    <form
      className="flex items-center gap-4"
      onSubmit={addTodoHandler}
      ref={formRef}
    >
      <input
        type="text"
        value={inputValue}
        name="todoValue"
        id="todoValue"
        onChange={(e) => setInputValue(e.target.value)}
        className="px-3 py-2 rounded bg-white/90 text-black"
        placeholder="Enter todo name"
      />
      <button
        type="submit"
        className="rounded px-4 py-2 bg-purple-600 hover:bg-purple-800 transition"
      >
        Add
      </button>
    </form>
  )
}

export default AddTodo
