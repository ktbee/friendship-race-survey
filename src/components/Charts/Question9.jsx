import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import PropTypes from 'prop-types';

const Question9 = ({ commonProps, responses = [] }) => {
    const responseData = {
        'Strongly agree': 0,
        Agree: 0,
        Neutral: 0,
        Disagree: 0,
        'Strongly Disagree': 0
    };

    responses.map(response => {
        if (response.friendshipsRaceRelations) {
            responseData[response.friendshipsRaceRelations]++;
        }
    });

    let compiledData = [
        { id: 'Strongly agree', opinion: responseData['Strongly agree'] },
        { id: 'Agree', opinion: responseData['Agree'] },
        { id: 'Neutral', opinion: responseData['Neutral'] },
        { id: 'Disagree', opinion: responseData['Disagree'] },
        { id: 'Strongly Disagree', opinion: responseData['Strongly Disagree'] }
    ];

    return (
        <div className="chart">
            <h3>
                Friendships across racial lines are essential for making
                progress to improve race relations.
            </h3>
            <ResponsiveBar
                data={compiledData}
                keys={['opinion']}
                layout="horizontal"
                labelTextColor="#ffffff"
                margin={{ top: 0, right: 0, bottom: 25, left: 120 }}
                {...commonProps}
            />
        </div>
    );
};

Question9.propTypes = {
    commonProps: PropTypes.object.isRequired,
    responses: PropTypes.array.isRequired
};

export default Question9;
