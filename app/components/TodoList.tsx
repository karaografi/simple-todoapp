import { ITask } from "@/types/tasks"
import Task from "./Task";

interface TodoListProps {
  tasks: ITask[]
}
export const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Tasks</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(task => (
              <Task key={task.id} task={task}/>
            ))}

          </tbody>
        </table>
      </div>
    </div>
  )
}


export default TodoList;