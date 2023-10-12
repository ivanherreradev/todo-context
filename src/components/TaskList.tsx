import { useTasks } from '../context/TasksContext'
import Task from './Task'

const TaskList = () => {
  const tasks = useTasks()

  return (
    <section className="max-w-3xl mx-auto">
      <ul>
        {tasks.length === 0
          ? (
          <p className="text-center mt-8">You have not yet created tasks</p>
            )
          : (
              tasks.map((task) => (
            <li
              key={task.id}
              className="mb-2 p-3 bg-[#262626] border-[#2e2e2e] border-[1px] rounded-md"
            >
              <Task task={task} />
            </li>
              ))
            )}
      </ul>
    </section>
  )
}

export default TaskList
