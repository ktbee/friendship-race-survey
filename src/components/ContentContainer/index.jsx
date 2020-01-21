import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Container, Grid, Responsive } from 'semantic-ui-react';

import './ContentContainer.css';
import ChartContainer from '@Components/ChartContainer';
import FilterMenu from '@Components/FilterMenu';

class ContentContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filters: []
        };

        this.handleFilterChange = this.handleFilterChange.bind(this);
    }

    handleFilterChange(data) {
        let updatedFilters = this.state.filters;

        if (data.checked) {
            updatedFilters.push({ type: [data.filter], value: data.label });
        } else {
            updatedFilters = updatedFilters.filter(
                filterObj => filterObj.value != data.label
            );
        }

        this.setState({ filters: updatedFilters });
    }

    render() {
        const { filters } = this.state;

        return (
            <Container className="content-container">
                <div>
                    <h2>
                        See how other people have answered questions about their
                        friendship patterns.
                    </h2>
                    <p>
                        As part of a listener episode about race and friendship,
                        the Death, Sex & Money podcast teamed up with
                        <a href="https://www.dlplummer.com/">
                            Dr. Deborah Plummer
                        </a>{' '}
                        to create{' '}
                        <a href="https://www.surveymonkey.com/r/race-and-friendship">
                            this survey
                        </a>
                        , which is based on those used in Dr. Plummer’s research
                        on cross-racial friendships. [Haven’t taken the survey
                        yet?{' '}
                        <a href="https://www.surveymonkey.com/r/race-and-friendship">
                            Do that first.
                        </a>
                        ]
                    </p>
                    <p>
                        Use the demographic filters below to explore how people
                        from around the country have answered questions about
                        their own friendship patterns, and reflect on how they
                        compare to your own. To read more about Dr. Plummer’s
                        findings, check out her book, “Some of My Friends Are…”
                        And to hear Death, Sex & Money episode featuring
                        personal stories about race and friendship, go to{' '}
                        <a href="http://deathsexmoney.org/friendship">
                            deathsexmoney.org/friendship.
                        </a>
                    </p>
                </div>
                <Grid stackable className="content-container--visualizations">
                    <Responsive as={Grid.Row} minWidth={771}>
                        <Grid.Column width={10}>
                            <ChartContainer filters={filters} />
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <FilterMenu
                                handleFilterChange={this.handleFilterChange}
                            />
                        </Grid.Column>
                    </Responsive>
                    <Responsive as={Grid.Row} maxWidth={770}>
                        <Grid.Column width={6}>
                            <FilterMenu
                                handleFilterChange={this.handleFilterChange}
                            />
                        </Grid.Column>
                        <Grid.Column width={16}>
                            <ChartContainer filters={filters} />
                        </Grid.Column>
                    </Responsive>
                </Grid>
                <div className="outro">
                    <p>
                        <a href="https://www.wnycstudios.org/podcasts/deathsexmoney">
                            Subscribe
                        </a>{' '}
                        to the Death, Sex & Money podcast. And{' '}
                        <a href="https://wnyc.us5.list-manage.com/subscribe?u=4109fdd323aaac7078eadaa8f&id=566f296761">
                            sign up
                        </a>{' '}
                        for the weekly Death, Sex & Money newsletter.
                    </p>
                </div>
            </Container>
        );
    }
}

export default ContentContainer;
