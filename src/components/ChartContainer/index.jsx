import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './ChartContainer.css';
import Question1 from '@Components/Charts/Question1';
import Question2 from '@Components/Charts/Question2';

const SURVEY_DATA_URL =
    'https://docs.google.com/spreadsheets/d/16YSXlYiE1acxoCjznUAT9M409YXyvNnPArJm5lTyQHE/edit?usp=sharing';
const SHEET_NAMES = new Set(['question1']);
const questionComponents = [Question1, Question2];

class ChartContainer extends Component {
    constructor() {
        super();

        this.state = {
            tabletop: null,
            commonProps: {
                indexBy: 'id',
                theme: { fontSize: 12 }
            }
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
        const { tabletop, commonProps } = this.state;
        return (
            <div>
                <Question1
                    responses={
                        tabletop ? tabletop.sheets('Question1').elements : []
                    }
                    commonProps={commonProps}
                />
                <Question2
                    responses={
                        tabletop ? tabletop.sheets('Question2').elements : []
                    }
                    commonProps={commonProps}
                />
            </div>
        );
    }
}

export default ChartContainer;
