import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';

import './styles.css';

import ContentContainer from '@Components/ContentContainer';
import HeaderMenu from '@Components/HeaderMenu';

const App = () => {
    return (
        <React.Fragment>
            <HeaderMenu />
            <ContentContainer />
        </React.Fragment>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
