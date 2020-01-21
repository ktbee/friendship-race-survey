import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import PropTypes from 'prop-types';

const Question3 = ({ commonProps, responses = [] }) => {
    if (!responses.length) {
        return (
            <div className="chart">
                <h3>
                    What prevents you from having more friends that are a race
                    different from your own? (check all that apply)
                </h3>
                <h4>No Responses Available</h4>
            </div>
        );
    }

    const responseData = {
        priority: 0,
        time: 0,
        politics: 0,
        faith: 0,
        fear: 0,
        neighborhood: 0,
        work: 0,
        leisure: 0,
        unknown: 0,
        other: 0
    };

    responses.map(response => {
        for (const column in response) {
            if (response[column]) responseData[column]++;
        }
    });

    let compiledData = [
        {
            id: 'Priority',
            label: 'Priority: Not important to me',
            value: responseData.priority
        },
        {
            id: 'Time',
            label: 'Time: No time for more friends',
            value: responseData.time
        },
        {
            id: 'Fear',
            label:
                'Fear: Concerned that our racial differences will be polarizing',
            value: responseData.fear
        },
        {
            id: 'Politics',
            label: 'Politics: We share different political ideologies',
            value: responseData.politics
        },
        {
            id: 'Faith',
            label: 'Faith: My faith community is not racially diverse',
            value: responseData.faith
        },
        {
            id: 'Neighborhood',
            label: 'Neighborhood: My neighborhood is not racially diverse',
            value: responseData.neighborhood
        },
        {
            id: 'Work',
            label: 'Work: My workplace is not racially diverse',
            value: responseData.work
        },
        {
            id: 'Leisure',
            label: "Leisure: We don't like the same kind of leisure activities",
            value: responseData.leisure
        },
        {
            id: 'Unknown',
            label: "Don't Know",
            value: responseData.unknown
        },
        {
            id: 'Other',
            label: 'Other',
            value: responseData.other
        }
    ];

    return (
        <div className="chart">
            <h3>
                What prevents you from having more friends that are a race
                different from your own? (check all that apply)
            </h3>
            <ResponsiveBar
                data={compiledData}
                keys={['value']}
                layout="horizontal"
                labelTextColor="#ffffff"
                margin={{ top: 20, right: 0, bottom: 25, left: 85 }}
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

Question3.propTypes = {
    commonProps: PropTypes.object.isRequired,
    responses: PropTypes.array.isRequired
};

export default Question3;
