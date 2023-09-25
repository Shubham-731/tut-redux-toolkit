"use client"

import AddTodo from "@/components/AddTodo"
import TodosContainer from "@/components/TodosContainer"
import { store } from "@/store"
import { Provider } from "react-redux"

export default function Home() {
  return (
    <Provider store={store}>
      <main className="p-4 space-y-5">
        <AddTodo />
        <TodosContainer />
      </main>
    </Provider>
  )
}
