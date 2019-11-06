import React from 'react';
import './App.css';
import CounterWithPortal from './Components'

/**
 * Generally, React renders the component as a child to the parent in which it is used. 
 * Whereas, portals in react gives developer an advantage to add a component outside the current DOM hierarchy by maintaining the event bubbling and state management.
 */

function App() {
  return (
    <div className="App">
      <h2>React Protals 👋</h2>
      <CounterWithPortal></CounterWithPortal>
    </div>
  );
}

export default App;
