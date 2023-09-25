import { useSelector } from "react-redux"
import { removeTodo, editTodo } from "@/features/todo/todoSlice"
import { useDispatch } from "react-redux"

const TodosContainer = () => {
  const todos = useSelector((state: { todos: Todo[] }) => state.todos)

  const dispatch = useDispatch()

  const editHandler = (id: string, todo: string) => {
    const updatedValue = prompt("Update your todo here:", todo)

    if (updatedValue) {
      dispatch(editTodo({ id, updatedText: updatedValue }))
    }
  }

  return (
    <div className="space-y-1">
      <h3 className="font-semibold text-lg">Todos:</h3>

      <ul className="">
        {todos.length ? (
          todos.map((todo) => (
            <li key={todo.id} className="flex items-center gap-2 space-y-1">
              <span>{todo.text}</span>
              <button
                onClick={() => editHandler(todo.id, todo.text)}
                className="bg-purple-600 hover:bg-purple-800 px-3 py-1 transition rounded"
              >
                Edit
              </button>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="bg-red-600 hover:bg-red-800 px-3 py-1 transition rounded"
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <p className="text-red-500">No todos created yet!</p>
        )}
      </ul>
    </div>
  )
}

export default TodosContainer
