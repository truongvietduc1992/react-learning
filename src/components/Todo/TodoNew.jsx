import { useState } from "react";

const TodoNew = (props) => {

    // const valueInput = "VD";

    const [valueInput, setValueInput] = useState("VD")


    console.log(">>>check point:", props)

    const { addNewTodo } = (props);

    const handClick = () => {
        console.log("Check value", valueInput)
        // alert("Click me")
    }

    const handChange = (name) => {
        // console.log(">>>handleOnChange", name)
        setValueInput(name)
    }

    addNewTodo()
    return (
        <div className='todo-new'>
            <input type="text"
                onChange={(event) => handChange(event.target.value)}
            />
            <button
                style={{ cursor: "pointer" }}
                onClick={handClick}
            >Add</button>
            <div> My text input is = {valueInput} </div>
        </div>

    )
}
export default TodoNew;
