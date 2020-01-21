import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Checkbox } from 'semantic-ui-react';

import './FilterMenu.css';
import FILTER_OPTIONS from './filterOptions';

const INITIAL_FILTERS = {
    age: '',
    education: '',
    ethnicity: '',
    gender: '',
    income: '',
    region: ''
};

class FilterMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filters: INITIAL_FILTERS
        };

        this.onCheckboxChange = this.onCheckboxChange.bind(this);
        this.onHeadingClick = this.onHeadingClick.bind(this);
        this.getFilterCheckboxes = this.getFilterCheckboxes.bind(this);
    }

    onCheckboxChange(event, data) {
        // Update state based on whether or not a checkbox should be checked
        const filterValue = data.checked ? data.label : '';
        const updatedFilters = Object.assign({}, this.state.filters, {
            [data.filter]: filterValue
        });

        this.setState({ filters: updatedFilters });
        this.props.handleFilterChange(updatedFilters);
    }

    onHeadingClick(event, { checked }) {
        const filterOptions = document.querySelector('.filter-menu--options');

        filterOptions.style.display = checked ? 'block' : 'none';
        if (!checked) {
            this.setState({ filters: INITIAL_FILTERS });
            this.props.handleFilterChange(INITIAL_FILTERS);
        }
    }

    getFilterCheckboxes(options) {
        return Object.entries(options).map(([type, filters]) => {
            const filtersCheckboxes = [];
            const filterValues = Object.entries(filters.value);

            filterValues.map(([label, acceptedValues]) => {
                filtersCheckboxes.push(
                    <li key={label}>
                        <Checkbox
                            checked={this.state.filters[type] === label}
                            label={label}
                            filter={type}
                            onChange={this.onCheckboxChange}
                        />
                    </li>
                );
            });
            return (
                <div key={type + 'Category'}>
                    <h3>{filters.label}</h3>
                    <ul>{filtersCheckboxes}</ul>
                </div>
            );
        });
    }

    render() {
        const FilterCheckboxes = this.getFilterCheckboxes(FILTER_OPTIONS);

        return (
            <div className="filter-menu">
                <div className="filter-menu--heading">
                    <Checkbox
                        className="filter-menu--heading-checkbox"
                        label="FILTER RESPONDENTS"
                        onClick={this.onHeadingClick}
                    />
                </div>
                <div className="filter-menu--options">{FilterCheckboxes}</div>
            </div>
        );
    }
}

FilterMenu.propTypes = {
    handleFilterChange: PropTypes.func.isRequired
};

export default FilterMenu;
