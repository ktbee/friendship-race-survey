import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ChartContainer extends Component {
    constructor() {
        super();

        this.state = {
            title: 'Race and Friendship'
        };
    }

    render() {
        return (
            <h2>{this.state.title}</h2>
            <div id="chart-container"></div>
        );
    }
}

export default ChartContainer;