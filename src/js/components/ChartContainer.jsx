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
            <div id="chart-container">
                <h2>{this.state.title}</h2>
            </div>
        );
    }
}

export default ChartContainer;
