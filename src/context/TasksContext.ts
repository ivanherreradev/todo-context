import { createContext } from 'react'
import { TasksAction, TasksState } from '../types/tasksTypes'

export const TasksContext = createContext<TasksState | null>(null)
export const TasksDispatchContext = createContext<React.Dispatch<TasksAction> | null>(
  null
)
