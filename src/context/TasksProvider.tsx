import { useReducer } from 'react'
import { TasksAction, TasksState } from '../types/tasksTypes'
import { TasksContext, TasksDispatchContext } from './TasksContext'

const initialTasks: TasksState = [
  { id: '1', text: 'Finish project presentation slides', done: false },
  { id: '2', text: 'Call mom for her birthday', done: true },
  { id: '3', text: 'Attend the team meeting at 2pm', done: false }
]

function tasksReducer (tasks: TasksState, action: TasksAction): TasksState {}

export function TasksProvider ({ children }: { children: React.ReactNode }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)
  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  )
}
