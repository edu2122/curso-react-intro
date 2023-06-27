import { TodoContext } from '../TodoContext';
import './TodoCounter.css';
import React from 'react';

function TodoCounter() {
  const { 
    totalTodos, 
    completedTodos
   } = React.useContext(TodoContext);
    
  return (
      completedTodos === totalTodos 
          ? <h1 className='TodoCounter'>Has completado todos tus TO DO'S❤️</h1> 
          :<h1 className='TodoCounter'>Has completado <span> {completedTodos} </span>de <span>{totalTodos}</span> TODOS</h1>
  );
}

export { TodoCounter };