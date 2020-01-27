import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import PropTypes from 'prop-types';

const Question12 = ({ commonProps, negativeResponses, responses = [] }) => {
    if (!responses.length) {
        return (
            <div className="chart">
                <h3>
                    I am uncomfortable in social settings where I am the only
                    one present of my racial group.
                </h3>
                <h4>No Responses Available</h4>
            </div>
        );
    }

    const responseData = {
        True: 0,
        False: 0
    };

    responses.map(response => {
        if (
            response.groupMinority &&
            !negativeResponses.includes(response.groupMinority)
        ) {
            responseData[response.groupMinority]++;
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
                I am uncomfortable in social settings where I am the only one
                present of my racial group.
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

Question12.propTypes = {
    commonProps: PropTypes.object.isRequired,
    negativeResponses: PropTypes.array.isRequired,
    responses: PropTypes.array.isRequired
};

export default Question12;
