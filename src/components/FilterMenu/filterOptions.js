const FILTER_OPTIONS = {
    Age: new Set([
        '18-25',
        '26-35',
        '36-45',
        '46-55',
        '56-65',
        '66-75',
        'Over 75'
    ]),
    Education: new Set([
        'Did not complete high school',
        'High school diploma/GED',
        'Some College',
        "Bachelor's Degree",
        'Some graduate school',
        "Master's Degree",
        'Doctorate or professional degree'
    ]),
    Gender: new Set([
        'Male',
        'Female',
        'Non-binary/third gender',
        'Prefer to self-describe',
        'Prefer not to say'
    ]),
    'Annual Household Income': new Set([
        '$200,000 or above',
        '$150,000-$199,000',
        '$149,000-100,000',
        '$99,000-75,000',
        '$74,000-50,000',
        '$49,000-25,000',
        '$24,000-10,000',
        '$9,000 or less'
    ]),
    'Race/Ethnic Origin': new Set([
        'Black/African American',
        'White/European American',
        'Asian or Pacific Islander/Asian American',
        'Hispanic/Latino/Latina',
        'Native American',
        'Bi- or Multi-racial/Multi-ethnic'
    ]),
    'Region of Residence': new Set([
        'U.S. Southern (Florida, Georgia, Alabama, Mississippi, Louisiana, Arkansas, Tennessee, South Carolina and North Carolina)',
        'U.S. East Coast (Virginia, Delaware, Maryland, New Jersey, Connecticut, Pennsylvania, and Washington DC)',
        'U.S. Northeast (Maine, New York, Rhode Island, Massachusetts, Vermont, New Hampshire)',
        'U.S. Midwest (Ohio, Kentucky, West Virginia, Indiana, Michigan, Illinois, Wisconsin, Missouri, Iowa, and Minnesota)',
        'U.S. Northwest (Oregon, Washington, Alaska, Hawaii, Idaho, Montana, and Wyoming)',
        'U. S. Southwest (California, Nevada, Utah, Colorado, Arizona, New Mexico and Texas',
        'U.S. Central (North Dakota, South Dakota, Nebraska, Kansas, and Oklahoma)',
        'Outside of the United States'
    ])
};

export default FILTER_OPTIONS;
