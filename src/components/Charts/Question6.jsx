import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import PropTypes from 'prop-types';

const Question6 = ({ commonProps, responses = [] }) => {
    if (!responses.length) return null;

    const responseData = {
        'Rarely (class reunions, funerals, anniversary celebrations, milestone birthday parties)': 0,
        'Once or twice a year': 0,
        'Once or twice a month': 0,
        Weekly: 0,
        Daily: 0
    };

    responses.map(response => {
        if (response.visitFrequency) {
            responseData[response.visitFrequency]++;
        }
    });

    let compiledData = [
        {
            id: 'Rarely',
            label:
                'Rarely (class reunions, funerals, anniversary celebrations, milestone birthday parties)',
            value:
                responseData[
                    'Rarely (class reunions, funerals, anniversary celebrations, milestone birthday parties)'
                ]
        },
        {
            id: 'Yearly',
            label: 'Once or twice a year',
            value: responseData['Once or twice a year']
        },
        {
            id: 'Monthly',
            label: 'Once or twice a month',
            value: responseData['Once or twice a month']
        },
        { id: 'Weekly', label: 'Weekly', value: responseData['Weekly'] },
        { id: 'Daily', label: 'Daily', value: responseData['Daily'] }
    ];

    return (
        <div className="chart">
            <h3>
                On average, how often do you see/visit with your friend of a
                different race?
            </h3>
            <ResponsiveBar
                data={compiledData}
                keys={['value']}
                labelTextColor="#ffffff"
                margin={{ top: 20, right: 0, bottom: 25, left: 25 }}
                {...commonProps}
            />
        </div>
    );
};

Question6.propTypes = {
    commonProps: PropTypes.object.isRequired,
    responses: PropTypes.array.isRequired
};

export default Question6;
