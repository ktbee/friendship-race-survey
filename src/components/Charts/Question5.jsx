import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import PropTypes from 'prop-types';

const Question5 = ({ commonProps, negativeResponses, responses = [] }) => {
    if (!responses.length) {
        return (
            <div className="chart">
                <h3>
                    My friend of another race shares the same (Please check all
                    that apply)
                </h3>
                <h4>No Responses Available</h4>
            </div>
        );
    }

    const responseData = {
        educationLevel: 0,
        socioeconomicLevel: 0,
        hobbies: 0,
        location: 0,
        friendGroup: 0,
        politics: 0,
        employment: 0,
        faith: 0
    };

    responses.map(response => {
        for (const column in response) {
            const questionResponse = response[column];
            if (
                questionResponse &&
                !negativeResponses.includes(questionResponse)
            ) {
                responseData[column]++;
            }
        }
    });

    let compiledData = [
        {
            id: 'Education',
            label: 'Educational level',
            value: responseData.educationLevel
        },
        {
            id: 'Socioeconomics',
            label: 'Socioeconomic level',
            value: responseData.socioeconomicLevel
        },
        {
            id: 'Hobbies',
            label: 'Hobbies',
            value: responseData.hobbies
        },
        {
            id: 'Location',
            label:
                'Geographical location (i.e. lives in the same city, town or neighborhood)',
            value: responseData.location
        },
        {
            id: 'Friends',
            label: 'Social group of friends',
            value: responseData.friendGroup
        },
        {
            id: 'Politics',
            label: 'Political affiliation',
            value: responseData.politics
        },
        {
            id: 'Employment',
            label: 'Place of employment',
            value: responseData.employment
        },
        {
            id: 'Faith',
            label: 'Faith community',
            value: responseData.faith
        }
    ];

    return (
        <div className="chart">
            <h3>
                My friend of another race shares the same (Please check all that
                apply)
            </h3>
            <ResponsiveBar
                data={compiledData}
                keys={['value']}
                layout="horizontal"
                labelTextColor="#ffffff"
                margin={{ top: 0, right: 10, bottom: 25, left: 100 }}
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

Question5.propTypes = {
    commonProps: PropTypes.object.isRequired,
    negativeResponses: PropTypes.array.isRequired,
    responses: PropTypes.array.isRequired
};

export default Question5;
