import React from 'react';
import '../DefaultStyles.css';
import {AppUI} from './AppUI';
import { TodoProvider } from '../TodoContext';

function App() {
  
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
};

export default App;
