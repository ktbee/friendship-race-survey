import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Container, Grid, Responsive } from 'semantic-ui-react';

import ChartContainer from '@Components/ChartContainer';
import FilterMenu from '@Components/FilterMenu';

class ContentContainer extends Component {
    constructor() {
        super();

        this.state = {
            title: 'Race and Friendship'
        };
    }

    render() {
        return (
            <Container>
                <div>
                    <h2>How do perceptions of race affect our friendships?</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla ornare neque quis sapien luctus gravida. Nullam
                        elit nisi, auctor in iaculis nec, ornare sed risus.
                        Maecenas in elit mattis, tincidunt sem non, luctus ante.
                        Nam varius ultricies diam, in ultrices eros ultrices at.
                        Orci varius natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus.
                    </p>
                </div>
                <Grid stackable>
                    <Responsive as={Grid.Row} minWidth={771}>
                        <Grid.Column width={10}>
                            <ChartContainer />
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <FilterMenu />
                        </Grid.Column>
                    </Responsive>
                    <Responsive as={Grid.Row} maxWidth={770}>
                        <Grid.Column width={6}>
                            <FilterMenu />
                        </Grid.Column>
                        <Grid.Column width={16}>
                            <ChartContainer />
                        </Grid.Column>
                    </Responsive>
                </Grid>
            </Container>
        );
    }
}

export default ContentContainer;
