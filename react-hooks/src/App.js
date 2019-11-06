import React, { useState } from 'react';
import { Input } from 'antd';
import 'antd/es/input/style/index.css';
import './App.css';


/**
 * In short, you can now use state, and other React features, within your functional React components.
 *  So, you don’t need a class to use state!
 * The biggest part to learn about hooks is the new way of declaring state. So as the first part of this app, let’s set up a component with state, the hooks way.
 
 ref. https://medium.com/@dtkatz/react-hooks-tutorial-learn-by-building-b90ec4db2b8e


 */

const App = () => {
  const [userText, setUserText] = useState('');
  const updateUserText = event => {
    setUserText(event.target.value);
    console.log(`current userText, ${userText}`);
  }

  return (
    <div className="container">
      <h2>Type something...</h2>
      <Input placeholder="Basic usage" onChange={(e) => updateUserText(e)} />
    </div>
  )
}
export default App;
