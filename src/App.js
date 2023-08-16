import React from 'react';
//import Format from './componenti.js/format';
import TodoList from './componenti.js/TodoList';
import Footer from './componenti.js/footer';
import './App.css';

function App() {
  
  return (
<>
  <div id='container'>
   <h1>Cosa devi fare oggi?</h1>
      <div className="firstInput">  
       <TodoList /> 
      </div>
      <Footer /> 
  </div>    
</>
  );
}

export default App;
