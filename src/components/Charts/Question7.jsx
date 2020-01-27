import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import PropTypes from 'prop-types';

const Question7 = ({ commonProps, negativeResponses, responses = [] }) => {
    if (!responses.length) {
        return (
            <div className="chart">
                <h3>How long have you been friends?</h3>
                <h4>No Responses Available</h4>
            </div>
        );
    }

    const responseData = {
        '0-3 years': 0,
        '4-5 years': 0,
        '6-10 years': 0,
        'Over 10 years': 0
    };

    responses.map(response => {
        if (
            response.frienshipLength &&
            !negativeResponses.includes(response.frienshipLength)
        ) {
            responseData[response.frienshipLength]++;
        }
    });

    let compiledData = [
        { id: '0-3 years', duration: responseData['0-3 years'] },
        { id: '4-5 years', duration: responseData['4-5 years'] },
        { id: '6-10 years', duration: responseData['6-10 years'] },
        { id: 'Over 10 years', duration: responseData['Over 10 years'] }
    ];

    return (
        <div className="chart">
            <h3>How long have you been friends?</h3>
            <ResponsiveBar
                data={compiledData}
                keys={['duration']}
                labelTextColor="#ffffff"
                margin={{ top: 20, right: 0, bottom: 25, left: 30 }}
                {...commonProps}
            />
        </div>
    );
};

Question7.propTypes = {
    commonProps: PropTypes.object.isRequired,
    negativeResponses: PropTypes.array.isRequired,
    responses: PropTypes.array.isRequired
};

export default Question7;
