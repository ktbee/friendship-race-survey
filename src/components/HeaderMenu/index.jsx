import React from 'react';
import { Menu } from 'semantic-ui-react';

import './HeaderMenu.css';

const HeaderMenu = () => {
    return (
        <Menu borderless className="header-menu">
            <Menu.Item className="logo__container">
                <a href="https://www.wnycstudios.org/podcasts/deathsexmoney">
                    <img
                        className="logo__image"
                        src="./assets/NYPR.DSM_1400.jpg"
                    />
                </a>
            </Menu.Item>
            <Menu.Item fitted="horizontally">
                <h1>
                    <span className="header__title--main">
                        Race and Friendship Survey:
                    </span>{' '}
                    <span className="header__title--sub">Your Responses</span>
                </h1>
            </Menu.Item>
        </Menu>
    );
};

export default HeaderMenu;
