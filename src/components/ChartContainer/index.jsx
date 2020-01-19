import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './ChartContainer.css';
import Question1 from '@Components/Charts/Question1';
import Question2 from '@Components/Charts/Question2';
import Question3 from '@Components/Charts/Question3';
import Question4 from '@Components/Charts/Question4';

const DAY_IN_MILLISECONDS = 86400000;
const SURVEY_DATA_URL =
    'https://docs.google.com/spreadsheets/d/16YSXlYiE1acxoCjznUAT9M409YXyvNnPArJm5lTyQHE/edit?usp=sharing';
const SHEET_NAMES = new Set(['question1']);

class ChartContainer extends Component {
    constructor() {
        super();

        this.state = {
            tabletop: null,
            commonProps: {
                indexBy: 'id',
                theme: { fontSize: 12 }
            },
            surveyQuestions: {
                Question1: [],
                Question2: [],
                Question3: [],
                Question4: []
            }
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData(forceUpdate = false) {
        const sheetCachedAt = localStorage.getItem('sheetCachedAt');
        const currentTime = Date.now();

        // Check once a day if we should update the cached sheet
        if (
            !sheetCachedAt ||
            currentTime - sheetCachedAt > DAY_IN_MILLISECONDS ||
            forceUpdate
        ) {
            Tabletop.init({
                key: SURVEY_DATA_URL,
                callback: (data, tabletop) => {
                    for (const sheetName in data) {
                        localStorage.removeItem(
                            sheetName,
                            JSON.stringify(data[sheetName].elements)
                        );
                        localStorage.setItem(
                            sheetName,
                            JSON.stringify(data[sheetName].elements)
                        );
                    }

                    localStorage.removeItem('sheetCachedAt');
                    localStorage.setItem('sheetCachedAt', Date.now());

                    this.fetchCachedData();
                }
            });
            return;
        }

        this.fetchCachedData();
    }

    fetchCachedData() {
        const { surveyQuestions } = this.state;
        const updatedQuestions = Object.assign({}, surveyQuestions);

        for (const question in surveyQuestions) {
            const questionData = JSON.parse(localStorage.getItem(question));

            // Force a request for all data if we're missing a questions's data
            if (!questionData) {
                this.fetchData(true);
                return;
            }
            updatedQuestions[question] = JSON.parse(
                localStorage.getItem(question)
            );
        }
        this.setState({ surveyQuestions: updatedQuestions });
    }

    render() {
        const { surveyQuestions, commonProps } = this.state;

        return (
            <div>
                <Question1
                    responses={surveyQuestions.Question1}
                    commonProps={commonProps}
                />
                <Question2
                    responses={surveyQuestions.Question2}
                    commonProps={commonProps}
                />
                <Question3
                    responses={surveyQuestions.Question3}
                    commonProps={commonProps}
                />
                <Question4
                    responses={surveyQuestions.Question4}
                    commonProps={commonProps}
                />
            </div>
        );
    }
}

export default ChartContainer;
