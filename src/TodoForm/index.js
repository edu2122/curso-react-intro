import React from "react";
import './TodoFormStyles.css';
import { TodoContext } from "../TodoContext";

function TodoForm() {
    const {
        setOpenModal,
        addTodo,
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event)=> {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    return (
        <form onSubmit = {onSubmit}>
            <label>Escribe tu nuevo ToDo</label>
            <textarea 
            placeholder="Escribe tu nuevo TODO..." 
            value={newTodoValue}
            onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button 
                onClick={onCancel}
                className="TodoForm-button TodoForm-button--cancel">
                    cancelar
                </button>
                <button className="TodoForm-button TodoForm-button--add">
                    Anadir
                </button>
            </div>
        </form>    
    )
}

export { TodoForm };