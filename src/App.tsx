import TasksProvider from './context/TasksProvider'
import Title from './components/Title'
import AddTask from './components/AddTask'
import TaskList from './components/TaskList'
import Data from './components/Data'
import './App.css'

const App = () => {
  return (
    <TasksProvider>
      <Title />
      <main className="w-3xl mx-auto p-2">
        <AddTask />
        <Data/>
        <TaskList />
      </main>
    </TasksProvider>
  )
}

export default App
