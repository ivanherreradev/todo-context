import { useState } from 'react'
import { useTasksDispatch } from '../context/TasksContext'
import AddIcon from '../assets/icons/AddIcon'
import { v4 as uuidv4 } from 'uuid'

const AddTask = () => {
  const [text, setText] = useState('')
  const dispatch = useTasksDispatch()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setText('')
    dispatch({
      type: 'ADD_TODO',
      id: uuidv4(),
      text
    })
  }

  return (
    <header>
      <form
        onSubmit={handleSubmit}
        className="flex flex-row justify-center mt-8 mb-6 max-w-3xl mx-auto sm:mt-12"
      >
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Add new task..."
          className="text-sm w-full bg-[#262626] focus:outline-none p-3 rounded-md border-[1px] border-black placeholder-[#626262]"
        />
        <button
          type="submit"
          className="ml-3 bg-[#696BFE] py-3 px-4 rounded-md flex items-center gap-2 border-none"
        >
          Add <AddIcon />
        </button>
      </form>
    </header>
  )
}

export default AddTask
