import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';

import './styles.css';

import ChartContainer from './components/ChartContainer.jsx';
import HeaderMenu from './components/HeaderMenu';

const App = () => {
    return (
        <React.Fragment>
            <HeaderMenu />
            <ChartContainer />
        </React.Fragment>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
