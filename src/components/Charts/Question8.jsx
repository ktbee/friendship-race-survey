import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import PropTypes from 'prop-types';

const Question8 = ({ commonProps, responses = [] }) => {
    const responseData = {
        homeSocializing: 0,
        vacation: 0,
        distressCall: 0,
        borrowMoney: 0,
        familyArgument: 0
    };

    responses.map(response => {
        for (const column in response) {
            if (response[column]) responseData[column]++;
        }
    });

    let compiledData = [
        {
            id: 'Home Socializing',
            label:
                'Socialized at my home (dinner, parties, birthday celebrations)',
            value: responseData.homeSocializing
        },
        {
            id: 'Vacationed Together',
            label: 'Vacationed together',
            value: responseData.vacation
        },
        {
            id: 'Distress Call',
            label:
                'Called in times of emotional distress at late night/early morning hour',
            value: responseData.distressCall
        },
        {
            id: 'Borrowed Money',
            label: 'Borrowed money',
            value: responseData.borrowMoney
        },
        {
            id: 'Family Argument',
            label: 'Witnessed or been present for a family argument',
            value: responseData.familyArgument
        }
    ];

    return (
        <div className="chart">
            <h3>
                I have done the following activities with my friend of a
                different race (Please check all that apply)
            </h3>
            <ResponsiveBar
                data={compiledData}
                keys={['value']}
                layout="horizontal"
                labelTextColor="#ffffff"
                margin={{ top: 0, right: 0, bottom: 25, left: 120 }}
                tooltip={({ data, value }) => (
                    <strong>
                        {data.label}: {value}
                    </strong>
                )}
                {...commonProps}
            />
        </div>
    );
};

Question8.propTypes = {
    commonProps: PropTypes.object.isRequired,
    responses: PropTypes.array.isRequired
};

export default Question8;
