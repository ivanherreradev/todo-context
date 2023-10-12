export interface Task {
  id: string
  text: string
  done: boolean
}

export type TasksState = Task[]

export type TasksAction =
  | { type: 'ADD_TODO'; id: string; text: string }
  | { type: 'CHANGE_TODO'; task: Task }
  | { type: 'DELETE_TODO'; id: string }
