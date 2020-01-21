import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import PropTypes from 'prop-types';

const Question11 = ({ commonProps, responses = [] }) => {
    const responseData = {
        True: 0,
        False: 0
    };

    responses.map(response => {
        if (response.raceHistory) {
            responseData[response.raceHistory]++;
        }
    });

    let compiledData = [
        {
            id: 'True',
            label: 'True',
            value: responseData['True']
        },
        {
            id: 'False',
            label: 'False',
            value: responseData['False']
        }
    ];

    return (
        <div className="chart">
            <h3>
                America&apos;s history of race relations prevents people from
                crossing racial lines in friendship.
            </h3>
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

Question11.propTypes = {
    commonProps: PropTypes.object.isRequired,
    responses: PropTypes.array.isRequired
};

export default Question11;
