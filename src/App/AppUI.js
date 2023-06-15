import {TodoCounter} from '../TodoCounter/';
import {TodoSearch} from '../TodoSearch';
import {TodoList} from '../TodoList';
import {TodoItem} from '../TodoItem';
import {CreateTodoButton} from '../CreateTodoButton';
import {TodosError} from '../TodosError';
import {TodosLoading} from '../TodosLoading';
import {TodosEmpty} from '../TodosEmpty';
import {TodoContext} from '../TodoContext';

function AppUI() {
    return (
        <>
          <TodoCounter />
          <TodoSearch/>
          
          <TodoContext.Consumer>
            {({
              loading,
              error,
              searchedTodos,
              completeTodo,
              deleteTodo,
              }) => (
              <TodoList>
              {loading && <TodosLoading/>}
              {error && <TodosError/>}
              {(!loading && !searchedTodos.length === 0) &&  <TodosEmpty/>}

              {searchedTodos.map(todo => (
              <TodoItem 
                key = {todo.text} 
                text = {todo.text}
                completed = {todo.completed}
                onComplete = {() => completeTodo(todo.text)}
                onDelete = {() => deleteTodo(todo.text)}
              />
              ))};
              </TodoList>
            )}
          </TodoContext.Consumer>
          <CreateTodoButton/>   
        </>
    );
};

export { AppUI };