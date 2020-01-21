import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Checkbox } from 'semantic-ui-react';

import './FilterMenu.css';
import FILTER_OPTIONS from './filterOptions';

class FilterMenu extends Component {
    constructor(props) {
        super(props);

        this.onCheckboxChange = this.onCheckboxChange.bind(this);
        this.onHeadingClick = this.onHeadingClick.bind(this);
        this.getFilterCheckboxes = this.getFilterCheckboxes.bind(this);
    }

    onCheckboxChange(event, data) {
        this.props.handleFilterChange(data);
    }

    onHeadingClick(event, { checked }) {
        const filterOptions = document.querySelector('.filter-menu--options');
        filterOptions.style.display = checked ? 'block' : 'none';
    }

    getFilterCheckboxes(options) {
        return Object.entries(options).map(([type, filters]) => {
            const filtersCheckboxes = [];
            filters.value.forEach(filter => {
                filtersCheckboxes.push(
                    <li key={filter}>
                        <Checkbox
                            label={filter}
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
