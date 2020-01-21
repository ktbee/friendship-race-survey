import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './ChartContainer.css';
import Question1 from '@Components/Charts/Question1';
import Question2 from '@Components/Charts/Question2';
import Question3 from '@Components/Charts/Question3';
import Question4 from '@Components/Charts/Question4';
import Question5 from '@Components/Charts/Question5';
import Question6 from '@Components/Charts/Question6';
import Question7 from '@Components/Charts/Question7';
import Question8 from '@Components/Charts/Question8';

const DAY_IN_MILLISECONDS = 86400000;
const SURVEY_DATA_KEY = '16YSXlYiE1acxoCjznUAT9M409YXyvNnPArJm5lTyQHE';
const SHEET_NAMES = new Set(['question1']);

class ChartContainer extends Component {
    constructor(props) {
        super(props);

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
                Question4: [],
                Question5: [],
                Question6: [],
                Question7: [],
                Question8: []
            }
        };

        this.filterResponses = this.filterResponses.bind(this);
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
                key: SURVEY_DATA_KEY,
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

    filterResponses(responses) {
        const { filters } = this.props;
        const filtersArray = Object.entries(filters);
        if (!filtersArray.length) return responses;

        const filteredResponses = responses.filter(response => {
            return filtersArray.every(([type, value]) => {
                if (value) {
                    return response[type] === value;
                }
                return true;
            });
        });

        return filteredResponses;
    }

    render() {
        const { surveyQuestions, commonProps } = this.state;
        const { filters } = this.props;

        return (
            <div>
                <Question1
                    responses={this.filterResponses(surveyQuestions.Question1)}
                    commonProps={commonProps}
                    filters={filters}
                />
                <Question2
                    responses={this.filterResponses(surveyQuestions.Question2)}
                    commonProps={commonProps}
                    filters={filters}
                />
                <Question3
                    responses={this.filterResponses(surveyQuestions.Question3)}
                    commonProps={commonProps}
                    filters={filters}
                />
                <Question4
                    responses={this.filterResponses(surveyQuestions.Question4)}
                    commonProps={commonProps}
                    filters={filters}
                />
                <Question5
                    responses={this.filterResponses(surveyQuestions.Question5)}
                    commonProps={commonProps}
                    filters={filters}
                />
                <Question6
                    responses={this.filterResponses(surveyQuestions.Question6)}
                    commonProps={commonProps}
                />
                <Question7
                    responses={this.filterResponses(surveyQuestions.Question7)}
                    commonProps={commonProps}
                />
                <Question8
                    responses={this.filterResponses(surveyQuestions.Question8)}
                    commonProps={commonProps}
                />
            </div>
        );
    }
}

ChartContainer.propTypes = {
    filters: PropTypes.object.isRequired
};

export default ChartContainer;
