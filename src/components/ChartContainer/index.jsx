import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Loader } from 'semantic-ui-react';
import { del, get, set } from 'idb-keyval';

import './ChartContainer.css';
import FILTER_OPTIONS from '@Components/FilterMenu/filterOptions';
import * as Charts from '@Components/Charts';

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
            },
            negativeResponses: ['FALSE', 'Not Answered']
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
        const {
            commonProps,
            dataLoading,
            surveyQuestions,
            negativeResponses
        } = this.state;
        const ChartComponents = [];

        if (dataLoading) {
            return <Loader active inline="centered" size="large" />;
        }

        for (const question in surveyQuestions) {
            const Chart = Charts[question];

            ChartComponents.push(
                <Chart
                    key={question}
                    responses={this.filterResponses(surveyQuestions[question])}
                    commonProps={commonProps}
                    negativeResponses={negativeResponses}
                />
            );
        }

        return ChartComponents;
    }
}

ChartContainer.propTypes = {
    filters: PropTypes.object.isRequired
};

export default ChartContainer;
