const FILTER_OPTIONS = {
    age: {
        label: 'Age',
        value: {
            '18-25': ['18-25', '18', '19', '20', '21', '22', '23', '24', '25'],
            '26-35': [
                '26-35',
                '26',
                '27',
                '28',
                '29',
                '30',
                '31',
                '32',
                '33',
                '34',
                '35'
            ],
            '36-45': [
                '36-45',
                '36',
                '37',
                '38',
                '39',
                '40',
                '41',
                '42',
                '43',
                '44',
                '45'
            ],
            '46-55': [
                '46-55',
                '46',
                '47',
                '48',
                '49',
                '50',
                '51',
                '52',
                '53',
                '54',
                '55'
            ],
            '56-65': [
                '56-65',
                '56',
                '57',
                '58',
                '59',
                '60',
                '61',
                '62',
                '63',
                '64',
                '65'
            ],
            '66-75': [
                '66-75',
                '66',
                '67',
                '68',
                '69',
                '70',
                '71',
                '72',
                '73',
                '74',
                '75'
            ],
            'Over 75': num => {
                if (num === 'Over 75') return true;
                let number = Number(num);
                return !isNaN(number) && number > 75;
            }
        }
    }
    // education: {
    //     label: 'Education',
    //     value: new Set([
    //         'Did not complete high school',
    //         'High school diploma/GED',
    //         'Some College',
    //         "Bachelor's Degree",
    //         'Some graduate school',
    //         "Master's Degree",
    //         'Doctorate or professional degree'
    //     ])
    // },
    // gender: {
    //     label: 'Gender',
    //     value: new Set([
    //         'Male',
    //         'Female',
    //         'Non-binary/third gender',
    //         'Prefer to self-describe',
    //         'Prefer not to say'
    //     ])
    // },
    // income: {
    //     label: 'Annual Household Income',
    //     value: new Set([
    //         '$200,000 or above',
    //         '$150,000-$199,00',
    //         '$149,000-100,000',
    //         '$99,000-75,000',
    //         '$74,000-50,000',
    //         '$49,000-25,000',
    //         '$24,000-10,000',
    //         '$9,000 or less'
    //     ])
    // },
    // ethnicity: {
    //     label: 'Race/Ethnic Origin',
    //     value: new Set([
    //         'Black/African  American',
    //         'White/European  American',
    //         'Asian or Pacific Islander/Asian American',
    //         'Hispanic/Latino/Latina',
    //         'Native American',
    //         'Bi- or Multi-racial/Multi-ethnic'
    //     ])
    // },
    // region: {
    //     label: 'Region of Residence',
    //     value: new Set([
    //         'U.S. Southern  (Florida, Georgia, Alabama, Mississippi, Louisiana, Arkansas, Tennessee, South Carolina and North Carolina)',
    //         'U.S. East Coast (Virginia, Delaware, Maryland, New Jersey, Connecticut, Pennsylvania, and Washington DC)',
    //         'U.S. Northeast (Maine, New York, Rhode Island, Massachusetts, Vermont, New Hampshire)',
    //         'U.S. Midwest (Ohio, Kentucky, West Virginia, Indiana, Michigan, Illinois, Wisconsin, Missouri, Iowa, and Minnesota)',
    //         'U.S. Northwest (Oregon, Washington, Alaska, Hawaii, Idaho, Montana, and Wyoming)',
    //         'U. S. Southwest (California, Nevada, Utah, Colorado, Arizona, New Mexico and Texas',
    //         'U.S. Central (North Dakota, South Dakota, Nebraska, Kansas, and Oklahoma)',
    //         'Outside of the United States (Name)'
    //     ])
    // }
};

export default FILTER_OPTIONS;
