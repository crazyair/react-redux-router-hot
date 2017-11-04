import React, {Component} from 'react';
import {Button,Input} from 'antd';
import http from '../http';

class Demo extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            count: 0,
            c: 1
        };
    }

    componentWillMount() {
        this.vCodeInterval = setInterval(() => {
            this.setState({count: this.state.count + this.state.c})
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.vCodeInterval);
    }

    render() {

        return (
            <div className="App">
                <Input/>
                <Button size="large" type="ghost">12</Button>
                <a onClick={() => this.setState({c: 10})}>aaaa</a>
                {this.state && this.state.count}
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default Demo