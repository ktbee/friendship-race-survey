import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import PropTypes from 'prop-types';

const Question1 = ({ commonProps, responses = [] }) => {
    if (!responses.length) return null;

    const responseData = {
        None: 0,
        '1-4': 0,
        '5-8': 0,
        'More than 8': 0
    };

    responses.map(response => {
        if (response.friendsQuantity) {
            responseData[response.friendsQuantity]++;
        }
    });

    let compiledData = [
        { id: 'None', 'Friends Quantity': responseData['None'] },
        { id: '1-4', 'Friends Quantity': responseData['1-4'] },
        { id: '5-8', 'Friends Quantity': responseData['5-8'] },
        { id: 'More than 8', 'Friends Quantity': responseData['More than 8'] }
    ];

    return (
        <div className="chart">
            <h3>
                The number of friendships that I have that cross racial lines.
            </h3>
            <ResponsiveBar
                data={compiledData}
                keys={['Friends Quantity']}
                colors={{ scheme: 'spectral' }}
                colorBy="indexValue"
                labelTextColor="#ffffff"
                margin={{ top: 20, right: 0, bottom: 25, left: 25 }}
                {...commonProps}
            />
        </div>
    );
};

Question1.propTypes = {
    commonProps: PropTypes.object.isRequired,
    responses: PropTypes.array.isRequired
};

export default Question1;
