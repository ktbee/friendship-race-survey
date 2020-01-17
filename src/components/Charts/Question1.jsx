import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

const Question1 = ({ responses }) => {
    // console.log('Question 1 responses', responses);

    // if (!responses) return null;

    const commonProps = {
        margin: { top: 60, right: 80, bottom: 60, left: 80 },
        indexBy: 'id',
        padding: 0.2,
        labelSkipWidth: 16,
        labelSkipHeight: 16
    };

    let compiledData = [
        { id: 'None', value: 12 },
        { id: '1-4', value: 8 },
        { id: '5-8', value: 3 },
        { id: 'More than 8', value: 16 }
    ];

    return (
        <div className="chart">
            <h3>
                The number of friendships that I have that cross racial lines.
            </h3>
            <ResponsiveBar
                data={compiledData}
                keys={['value']}
                colors={{ scheme: 'spectral' }}
                labelTextColor={{ from: 'color', modifiers: [['darker', 1.4]] }}
                {...commonProps}
            />
        </div>
    );
};

export default Question1;
