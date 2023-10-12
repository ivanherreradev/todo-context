import { useTasks } from '../context/TasksContext'
import { Task } from '../types/tasksTypes'

const Data = () => {
  const tasks = useTasks()

  const totalTasks = tasks.length

  const countCompletedTasks = tasks.reduce((count: number, task: Task) => {
    if (task.done) {
      return count + 1
    } else {
      return count
    }
  }, 0)

  return (
    <div className="flex flex-col sm:flex-row justify-between mx-auto w-full max-w-3xl mb-4">
      <p className="font-bold text-[#DEC74E] text-sm mt-4">
        Tasks created{' '}
        <span className="bg-[#262626] py-1 px-2 rounded-l-full rounded-r-full text-white ml-2">
          {totalTasks}
        </span>
      </p>
      <p className="font-bold text-[#696BFE] text-sm mt-4">
        Completed{' '}
        <span className="bg-[#262626] py-1 px-2 rounded-l-full rounded-r-full text-white ml-2">
          {countCompletedTasks} de {totalTasks}
        </span>
      </p>
    </div>
  )
}

export default Data
