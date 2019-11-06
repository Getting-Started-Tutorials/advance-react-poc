import React from 'react';
import withSecretToLife from './HOC';


/**
 * Done with POC.
 * https://levelup.gitconnected.com/understanding-react-higher-order-components-by-example-95e8c47c8006
 */

class DisplayTheSecret extends React.Component {
    constructor(props) {
        super(props)
        this.greetings = 'Hey';
    }
    render() {
        return (
            <div>
                {this.greetings}, The secret to life is {this.props.secretToLife}, {this.props.comment}.
            </div>
        )
    }
}

const WrappedComponent = withSecretToLife(DisplayTheSecret);

export default WrappedComponent;