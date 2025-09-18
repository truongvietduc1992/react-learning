import './components/Todo/todo.css'
import './components/Todo/TodoNew'
import './components/Todo/TodoData.jsx'
import TodoNew from './components/Todo/TodoNew.jsx'
import TodoData from './components/Todo/TodoData.jsx'
import reactLogo from './assets/react.svg'


const App = () => {

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew />
      <TodoData />
      <div className='todo-image'></div>
      <img src={reactLogo} />
    </div>
  )
}

export default App
