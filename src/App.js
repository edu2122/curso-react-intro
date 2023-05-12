import {TodoTitle} from './TodoTitle';
import {TodoSearch} from './TodoSearch';
import {TodoList} from './TodoList';
import {TodoItem} from './TodoItem';
import {CreateTodoButton} from './CreateTodoButton';
import './App.css';

function App() {
  return (
    <div className="App">

      <TodoTitle/>
      <TodoSearch/>
      
      <TodoList>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </TodoList>
      
      <CreateTodoButton/>
    </div>
  );
};

export default App;
