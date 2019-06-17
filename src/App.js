import React, { Component } from 'react';
//--------- importing Components
import TodoEntry from './component/TodoEntry'
import TodoItems from './component/TodoItems'

class App extends Component {
  render() {
    return (
      
      <div id="todoapp" className="todoapp" > 
        <TodoEntry />
        <TodoItems />  
       </div>
      
    );
  }
}

export default App;
