import './App.css'
import Todo from './components/Todo'
import AddTodo from './components/AddTodo'

function App() {


  return (
    <div className='bg-gray-200 min-h-screen'>
      <h1 className='text-center text-red-900 text-4xl font-extrabold'>TODOS</h1>
      <AddTodo/>
      <Todo/>
    </div>
  )
}

export default App
