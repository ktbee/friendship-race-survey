import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import PropTypes from 'prop-types';

const Question2 = ({ commonProps, responses = [] }) => {
    const responseData = {
        'Very important': 0,
        'Somewhat important': 0,
        'Not important': 0
    };

    responses.map(response => {
        if (response.differentFriendRaceImportance) {
            responseData[response.differentFriendRaceImportance]++;
        }
    });

    let compiledData = [
        {
            id: 'Very important',
            label: 'Very important',
            value: responseData['Very important']
        },
        {
            id: 'Somewhat important',
            label: 'Somewhat important',
            value: responseData['Somewhat important']
        },
        {
            id: 'Not important',
            label: 'Not important',
            value: responseData['Not important']
        }
    ];

    return (
        <div className="chart">
            <h3>How important is it to have friends of different races?</h3>
            <ResponsivePie
                margin={{ top: 20, bottom: 0, left: 120, right: 120 }}
                data={compiledData}
                innerRadius={0.6}
                padAngle={0.5}
                cornerRadius={5}
                radialLabelsLinkDiagonalLength={3}
                radialLabelsLinkStrokeWidth={1}
                radialLabelsLinkColor={{ from: 'color' }}
                radialLabelsTextColor="inherit:darker(1.2)"
                radialLabelsLinkHorizontalLength={10}
                slicesLabelsTextColor="#ffffff"
                {...commonProps}
            />
        </div>
    );
};

Question2.propTypes = {
    commonProps: PropTypes.object.isRequired,
    responses: PropTypes.array.isRequired
};

export default Question2;
