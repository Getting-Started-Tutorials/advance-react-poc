import React from 'react';
import logo from './logo.svg';
import './App.css';

import WrappedComponent from './Components/wrapped';

/*
    Concretely, a higher-order component is a function that takes a component and returns a new component.
    const EnhancedComponent = higherOrderComponent(WrappedComponent);

    A higher-order component in React is a pattern used to share common functionality between components without repeating code.
    Imagine a Mixin in polymer.
    A higher-order component is actually not a component though, it is a function.
    A HOC function takes a component as an argument and returns a component. 
    It transforms a component into another component and adds additional data or functionality.

    const NewComponent = (BaseComponent) => {
      // ... create new component from old one and update
    return UpdatedComponent.

    Two HOC’s implementations that you may be familiar with in the React ecosystem are connect from 
    Redux and withRouter from React Router.

    The connect function from Redux is used to give components access to the global state in the Redux store, and it passes these values to the component as props.
    The withRouter function injects the router information and functionality into the component, enabling the developer access or change the route.

    Ref - https://levelup.gitconnected.com/understanding-react-higher-order-components-by-example-95e8c47c8006
}

 */

function App() {
  return (
    <div className="App">
      <WrappedComponent comment='did you get that?'></WrappedComponent>
    </div>
  );
}

export default App;
