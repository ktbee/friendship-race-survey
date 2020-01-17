import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './ChartContainer.css';
import Question1 from '@Components/Charts/Question1';

const SURVEY_DATA_URL =
    'https://docs.google.com/spreadsheets/d/16YSXlYiE1acxoCjznUAT9M409YXyvNnPArJm5lTyQHE/edit?usp=sharing';
const SHEET_NAMES = new Set(['question1']);

class ChartContainer extends Component {
    constructor() {
        super();

        this.state = {
            tabletop: null
        };

        this.fetchData();
    }

    fetchData() {
        Tabletop.init({
            key: SURVEY_DATA_URL,
            callback: (data, tabletop) => {
                this.setState({ tabletop });
            },
            simpleSheet: true
        });
    }

    render() {
        const { tabletop } = this.state;
        return (
            <div>
                <Question1
                    responses={
                        tabletop ? tabletop.sheets('question1').elements : null
                    }
                />
            </div>
        );
    }
}

export default ChartContainer;
