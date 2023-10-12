import { TasksAction, TasksState } from '../types/tasksTypes'

export function tasksReducer (tasks: TasksState, action: TasksAction): TasksState {
  switch (action.type) {
    case 'ADD_TODO': {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false
        }
      ]
    }
    case 'CHANGE_TODO': {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task
        } else {
          return t
        }
      })
    }
    case 'DELETE_TODO': {
      return tasks.filter((t) => t.id !== action.id)
    }
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}
