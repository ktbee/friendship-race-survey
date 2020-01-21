import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Loader } from 'semantic-ui-react';
import { del, get, set } from 'idb-keyval';

import './ChartContainer.css';
import FILTER_OPTIONS from '@Components/FilterMenu/filterOptions';
import Question1 from '@Components/Charts/Question1';
import Question2 from '@Components/Charts/Question2';
import Question3 from '@Components/Charts/Question3';
import Question4 from '@Components/Charts/Question4';
import Question5 from '@Components/Charts/Question5';
import Question6 from '@Components/Charts/Question6';
import Question7 from '@Components/Charts/Question7';
import Question8 from '@Components/Charts/Question8';
import Question9 from '@Components/Charts/Question9';
import Question10 from '@Components/Charts/Question10';
import Question11 from '@Components/Charts/Question11';
import Question12 from '@Components/Charts/Question12';

const DAY_IN_MILLISECONDS = 86400000;
const SURVEY_DATA_KEY = '16YSXlYiE1acxoCjznUAT9M409YXyvNnPArJm5lTyQHE';

class ChartContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            commonProps: {
                colors: { scheme: 'spectral' },
                colorBy: 'index',
                indexBy: 'id',
                theme: { fontSize: 12 }
            },
            dataLoading: false,
            FILTER_OPTIONS: FILTER_OPTIONS,
            surveyQuestions: {
                Question1: [],
                Question2: [],
                Question3: [],
                Question4: [],
                Question5: [],
                Question6: [],
                Question7: [],
                Question8: [],
                Question9: [],
                Question10: [],
                Question11: [],
                Question12: []
            }
        };

        this.filterResponses = this.filterResponses.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    async fetchData(forceUpdate = false) {
        const sheetCachedAt = await get('sheetCachedAt');
        const currentTime = Date.now();

        this.setState({ dataLoading: true });

        // Check once a day if we should update the cached sheet
        if (
            !('indexedDB' in window) ||
            !sheetCachedAt ||
            currentTime - sheetCachedAt > DAY_IN_MILLISECONDS ||
            forceUpdate
        ) {
            Tabletop.init({
                key: SURVEY_DATA_KEY,
                callback: (data, tabletop) => {
                    const { surveyQuestions } = this.state;
                    const updatedQuestions = Object.assign({}, surveyQuestions);

                    for (const sheetName in data) {
                        updatedQuestions[sheetName] = data[sheetName].elements;
                    }

                    this.setState({
                        surveyQuestions: updatedQuestions,
                        dataLoading: false
                    });

                    if (!('indexedDB' in window)) {
                        return;
                    }

                    // Save response data in IndexedDB
                    del('surveyQuestions');
                    set('surveyQuestions', updatedQuestions);
                    del('sheetCachedAt');
                    set('sheetCachedAt', Date.now());
                }
            });
            return;
        }

        this.fetchCachedData();
    }

    async fetchCachedData() {
        const { surveyQuestions } = this.state;
        const cachedQuestions = await get('surveyQuestions');
        this.setState({
            surveyQuestions: cachedQuestions,
            dataLoading: false
        });
    }

    filterResponses(responses) {
        const { filters } = this.props;
        const filtersArray = Object.entries(filters);
        if (!filtersArray.length) return responses;

        const filteredResponses = responses.filter(response => {
            const { FILTER_OPTIONS } = this.state;

            return filtersArray.every(([type, value]) => {
                if (value) {
                    const acceptedValues = FILTER_OPTIONS[type]['value'][value];

                    if (Array.isArray(acceptedValues)) {
                        return acceptedValues.includes(response[type]);
                    }

                    return acceptedValues(response[type]);
                }
                return true;
            });
        });

        return filteredResponses;
    }

    render() {
        const { commonProps, dataLoading, surveyQuestions } = this.state;
        const { filters } = this.props;

        if (dataLoading) {
            return <Loader active inline="centered" size="large" />;
        }

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
                <Question9
                    responses={this.filterResponses(surveyQuestions.Question9)}
                    commonProps={commonProps}
                />
                <Question10
                    responses={this.filterResponses(surveyQuestions.Question10)}
                    commonProps={commonProps}
                />
                <Question11
                    responses={this.filterResponses(surveyQuestions.Question11)}
                    commonProps={commonProps}
                />
                <Question12
                    responses={this.filterResponses(surveyQuestions.Question12)}
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
