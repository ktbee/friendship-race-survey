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
                Charts go here
            </div>
        );
    }
}

export default ChartContainer;
