import { createContext } from 'react'
import { Task, TasksState } from '../types/tasksTypes'

type TasksAction =
  | { type: 'ADD_TODO'; id: string; text: string }
  | { type: 'CHANGE_TODO'; task: Task }
  | { type: 'DELETE_TODO'; id: string }

export const TasksContext = createContext<TasksState | null>(null)
export const TasksDispatchContext = createContext<React.Dispatch<TasksAction> | null>(
  null
)
