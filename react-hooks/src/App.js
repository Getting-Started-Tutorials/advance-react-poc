import React, { useState } from 'react';
import { Input } from 'antd';
import { Button } from 'antd';
import 'antd/es/button/style/index.css';
import 'antd/es/input/style/index.css';
import './App.css';


/**
 * In short, you can now use state, and other React features, within your functional React components.
 *  So, you don’t need a class to use state!
 * The biggest part to learn about hooks is the new way of declaring state. So as the first part of this app, let’s set up a component with state, the hooks way.
 
 ref. https://medium.com/@dtkatz/react-hooks-tutorial-learn-by-building-b90ec4db2b8e


 */

const App = () => {
  const SNIPPETS = [
    'Bears, beets, battlestar galactica',
    "What's Forrest Gump's password?",
    'Where do programmers like to hangout? The Foo Bar'
  ];
  const [snippet, setSnippet] = useState('Lazy! select snippet!');
  const [userText, setUserText] = useState('');

  const updateUserText = event => {
    setUserText(event.target.value);
    console.log(userText);
  }

  const chooseSnippet = snippetIndex => () => {
    console.log('setSnippet', snippetIndex);
    setSnippet(SNIPPETS[snippetIndex]);
  };

  return (
    <div className="container">
      <h2>Type something...</h2>
      <h3>{snippet}</h3>
      <Input placeholder="Basic usage" onChange={(e) => updateUserText(e)} />
      {
        SNIPPETS.map((SNIPPET, index) => (
          <Button onClick={chooseSnippet(index)} key={index} type="primary" className='btn'>
            {SNIPPET.substring(0, 15)}...
          </Button>
        ))
      }
    </div>
  )
}
export default App;

/** Class

 * But you still need to remain cognizant of the fact that your method must have access to the this.setState function,
   that gets attached when your component inherits from the React.Component class.

 * Here is the class version of the same.

class App extends React.Component {
 state = { userText: '' };

 updateUserText = event => {
   this.setState({ userText: event.target.value });
   console.log('current userText', this.state.userText);
 }

 render() {
   return (
     <div>
       <h2>Type Race</h2>
       <input value={this.state.userText} onChange={this.updateUserText} />
     </div>
   );
 }
}

 */
