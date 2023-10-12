import { useReducer } from 'react'
import { TasksContext, TasksDispatchContext } from './TasksContext'
import { tasksReducer } from './TasksReducer'
import { TasksState } from '../types/tasksTypes'
import { v4 as uuidv4 } from 'uuid'

const initialTasks: TasksState = [
  { id: uuidv4(), text: 'Finish project presentation slides', done: false },
  { id: uuidv4(), text: 'Call mom for her birthday', done: true },
  { id: uuidv4(), text: 'Attend the team meeting at 2pm', done: false }
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
