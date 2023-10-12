import TasksProvider from './context/TasksProvider'
import Title from './components/Title'
import './App.css'

const App = () => {
  return (
    <TasksProvider>
      <Title/>
    </TasksProvider>
  )
}

export default App
