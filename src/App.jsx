import './components/Todo/todo.css'
import './components/Todo/TodoNew'
import './components/Todo/TodoData.jsx'
import TodoNew from './components/Todo/TodoNew.jsx'
import TodoData from './components/Todo/TodoData.jsx'
import reactLogo from './assets/react.svg'
import { useState } from 'react'


const App = () => {

  const [todoList, setTodoList] = useState([
    { id: 1, name: "Learning React" },
    { id: 2, name: "Watching JAV" }
  ])


  // const data = {
  //   adress: "Hanoi",
  //   country: "VN;"

  // }

  const addNewTodo = (name) => {
    // alert(`call me ${name}`)

  }


  // addNewTodo()
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
        addNewTodo={addNewTodo}
      />
      <TodoData
        // data={data}
        todoList={todoList}
      />

      <div className='todo-image'></div>
      <img src={reactLogo} />
    </div>
  )
}

export default App
