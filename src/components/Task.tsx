import { useState } from 'react'
import { useTasksDispatch } from '../context/TasksContext'
import EditIcon from '../assets/icons/EditIcon'
import TrashIcon from '../assets/icons/TrashIcon'

interface TaskProps {
  task: {
    id: string
    text: string
    done: boolean
  }
}

const Task = ({ task }: TaskProps) => {
  const [isEditing, setIsEditing] = useState(false)
  const dispatch = useTasksDispatch()

  let taskContent

  if (isEditing) {
    taskContent = (
      <div className="flex flex-col sm:flex-row items-start gap-2">
        <input
          className="text-sm w-full bg-[#262626] focus:outline-none p-3 rounded-md border-[1px] border-white placeholder-[#626262]"
          value={task.text}
          onChange={(e) => {
            dispatch({
              type: 'CHANGE_TODO',
              task: {
                ...task,
                text: e.target.value
              }
            })
          }}
        />
        <button
          className="sm:ml-3 bg-[#696BFE] py-3 px-4 rounded-md border-none"
          onClick={() => setIsEditing(false)}
        >
          Save
        </button>
      </div>
    )
  } else {
    taskContent = <>{task.text}</>
  }

  return (
    <div className="flex flex-row">
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          dispatch({
            type: 'CHANGE_TODO',
            task: {
              ...task,
              done: e.target.checked
            }
          })
        }}
      />
      <p
        className={`mx-4 w-full ${
          task.done && !isEditing ? 'line-through text-[#626262] italic' : ''
        }`}
      >
        {taskContent}
      </p>
      {!isEditing && (
        <button className="mr-2" onClick={() => setIsEditing(true)}>
          <EditIcon />
        </button>
      )}

      <button
        onClick={() => {
          dispatch({
            type: 'DELETE_TODO',
            id: task.id
          })
        }}
      >
        <TrashIcon />
      </button>
    </div>
  )
}

export default Task
