import { useReducer } from 'react'
import { TasksContext, TasksDispatchContext } from './TasksContext'
import { tasksReducer } from './TasksReducer'
import { TasksState } from '../types/tasksTypes'

const initialTasks: TasksState = [
  { id: '1', text: 'Finish project presentation slides', done: false },
  { id: '2', text: 'Call mom for her birthday', done: true },
  { id: '3', text: 'Attend the team meeting at 2pm', done: false }
]

const TasksProvider = ({ children }: { children: React.ReactNode }) => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)
  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  )
}

export default TasksProvider
