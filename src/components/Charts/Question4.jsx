import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import PropTypes from 'prop-types';

const Question4 = ({ commonProps, responses = [] }) => {
    if (!responses.length) return null;

    const responseData = {
        routine: 0,
        chance: 0
    };

    responses.map(response => {
        switch (response.friendshipFormation) {
            case 'Routine, repeated, predictable interaction (such as work, school or a neighbor)':
                responseData.routine++;
                break;
            case 'Chance meeting (such as in an exercise class, a restaurant, social gathering)':
                responseData.chance++;
                break;
            default:
                break;
        }
    });

    let compiledData = [
        {
            id: 'Routine',
            label: '',
            label1: 'Routine, repeated, predictable interaction',
            label2: ' (such as work, school or a neighbor)',
            value: responseData.routine
        },
        {
            id: 'Chance',
            label: '',
            label1: 'Chance meeting',
            label2:
                '(such as in an exercise class, a restaurant, social gathering)',
            value: responseData.chance
        }
    ];

    return (
        <div className="chart">
            <h3>The friendship was formed from...</h3>
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
                tooltip={({ label1, label2, value }) => (
                    <strong>
                        {label1}
                        <br />
                        {label2}: {value}
                    </strong>
                )}
                {...commonProps}
            />
        </div>
    );
};

Question4.propTypes = {
    commonProps: PropTypes.object.isRequired,
    responses: PropTypes.array.isRequired
};

export default Question4;
