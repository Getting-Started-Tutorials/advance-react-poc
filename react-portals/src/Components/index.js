import React, { Component } from 'react';
import ReactDom from 'react-dom';

/*
export default class CounterWithoutPortal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };
    }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1,
        });
    }

    render() {
        return (
            <div>
                The count is {this.state.count}
                <br></br>
                <button onClick={this.incrementCount}>Increment Count</button>
            </div>
        )
    }
}

*/

const root = document.getElementById('portal-root');
export default class CounterWithPortal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1,
        });
    }

    render() {
        return ReactDom.createPortal(
            <div>
                The count is {this.state.count}.
                <br></br>
                <button onClick={this.incrementCount}>Increment Count</button>
            </div>,
            root
        )
    }
}