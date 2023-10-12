import { createContext, useContext } from 'react'
import { TasksAction, TasksState } from '../types/tasksTypes'

export const TasksContext = createContext<TasksState | null>(null)
export const TasksDispatchContext = createContext<React.Dispatch<TasksAction> | null>(
  null
)

export function useTasks () {
  const tasks = useContext(TasksContext)
  if (tasks === null) {
    throw new Error('useTasks must be used within a TasksProvider')
  }
  return tasks
}

export function useTasksDispatch () {
  const dispatch = useContext(TasksDispatchContext)
  if (dispatch === null) {
    throw new Error('useTasksDispatch must be used within a TasksProvider')
  }
  return dispatch
}
