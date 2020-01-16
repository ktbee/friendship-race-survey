import React from 'react';
import { Menu } from 'semantic-ui-react';

import './HeaderMenu.css'

const HeaderMenu = () => {
    return (
        <Menu borderless className="header-menu">
            <Menu.Item className="logo__container">
                <a href="https://www.wnycstudios.org/podcasts/deathsexmoney">
                    <img className="logo__image" src="./assets/NYPR.DSM_1400.jpg" />
                </a>
            </Menu.Item>
            <Menu.Item fitted='horizontally'>
                <h2>Race and Friendship</h2>
            </Menu.Item>
        </Menu>
    );
};

export default HeaderMenu;
