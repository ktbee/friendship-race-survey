import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import PropTypes from 'prop-types';

const Question10 = ({ commonProps, responses = [] }) => {
    if (!responses.length) {
        return (
            <div className="chart">
                <h3>
                    Societal messages about race relations influence my choice
                    to have friends that cross racial lines.
                </h3>
                <h4>No Responses Available</h4>
            </div>
        );
    }

    const responseData = {
        true: 0,
        false: 0
    };

    responses.map(response => {
        if (!response.societalMessages);

        const answer = response.societalMessages.toLowerCase();
        responseData[answer]++;
    });

    let compiledData = [
        {
            id: 'True',
            label: 'True',
            value: responseData.true
        },
        {
            id: 'False',
            label: 'False',
            value: responseData.false
        }
    ];

    return (
        <div className="chart">
            <h3>
                Societal messages about race relations influence my choice to
                have friends that cross racial lines.
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

Question10.propTypes = {
    commonProps: PropTypes.object.isRequired,
    negativeResponses: PropTypes.array.isRequired,
    responses: PropTypes.array.isRequired
};

export default Question10;
