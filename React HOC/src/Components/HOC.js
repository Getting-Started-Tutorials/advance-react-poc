import React, { Fragment } from 'react';

/*
HOC Layout just like mixin in polymer.

import React from 'react';

const higherOrderComponent = (WrappedComponent) => {
  class HOC extends React.Component {
    render() {
      return <WrappedComponent />;
    }
  }
    
  return HOC;
};


We will invoke it like this.

const SimpleHOC = higherOrderComponent(MyComponent);

The other addition is that we spread the props passed to the component. 
This ensures that any other props that are passed to the wrapped component will be accessible via this.props in the same manner, 
as they would be called if the component was not passed through our higher-order component function.

*/

const withSecretToLife = (WrappedComponent) => {
    class HOC extends React.Component {
        render() {
            return (
                <WrappedComponent
                    {...this.props}
                    secretToLife={42}
                />
            );
        }
    }

    return HOC;
};

export default withSecretToLife;