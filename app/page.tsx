import { getAllTodos } from "@/api"
import { AddTask } from "./components/AddTask"
import { TodoList } from "./components/TodoList"

export  default async function Home() {
  const tasks = await getAllTodos();
  console.log(tasks);
  return (
    <main className="mx-auto max-w-4xl mt-4 ">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-black">Todo List App</h1>
        <AddTask />
        <TodoList tasks={tasks} />
      </div>
      
    </main>
  )
}
