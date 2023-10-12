import { TasksProvider } from './context/TasksProvider'
import './App.css'

const App = () => {
  return (
    <TasksProvider>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </TasksProvider>
  )
}

export default App
