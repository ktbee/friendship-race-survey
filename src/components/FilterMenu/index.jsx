import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Checkbox } from 'semantic-ui-react';

import './FilterMenu.css';
import FILTER_OPTIONS from './filterOptions';

const FilterCheckboxes = ({ options }) => {
    return Object.entries(options).map(([heading, filters]) => {
        const filtersCheckboxes = [];
        filters.forEach(filter => {
            filtersCheckboxes.push(
                <li key={filter}>
                    <Checkbox label={filter} />
                </li>
            );
        });
        return (
            <div key={heading + 'Category'}>
                <h3>{heading}</h3>
                <ul>{filtersCheckboxes}</ul>
            </div>
        );
    });
};

const onFilterClick = (event, { checked }) => {
    const filterOptions = document.querySelector('.filter-menu--options');
    filterOptions.style.display = checked ? 'block' : 'none';
};

const FilterMenu = () => {
    return (
        <div className="filter-menu">
            <div className="filter-menu--heading">
                <Checkbox
                    className="filter-menu--heading-checkbox"
                    label="FILTER"
                    onClick={onFilterClick}
                />
            </div>
            <div className="filter-menu--options">
                <FilterCheckboxes options={FILTER_OPTIONS} />
            </div>
        </div>
    );
};

export default FilterMenu;
