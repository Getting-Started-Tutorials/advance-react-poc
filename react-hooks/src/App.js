import React from 'react';
import { Input } from 'antd';
import 'antd/es/input/style/index.css';
import './App.css';


/**
 * In short, you can now use state, and other React features, within your functional React components.
 *  So, you don’t need a class to use state!
 * The biggest part to learn about hooks is the new way of declaring state. So as the first part of this app, let’s set up a component with state, the hooks way.
 */

const App = () => {
  return (
    <div className="container">
      <h2>Type something...</h2>
      <Input placeholder="Basic usage"/>
    </div>
  )
}
export default App;
