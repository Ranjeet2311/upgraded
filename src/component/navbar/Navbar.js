import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Logo from '../avatar/fevicon-Avatar.jpg';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';

const menuLinks = [
  { name: 'Info', url: '/' },
  { name: 'Tech-Stack', url: '/tech-stack' },
  { name: 'Experience', url: '/experience' },
  // { name: 'Projects', url: '/projects' },
];

const navIconStyle = {
  marginRight: '2rem',
  color: 'rgb(0, 0, 0)',
  border: '1px solid white',
  background: 'white',
  margin: '6px 12px',
};

function Navbar() {
  const [clicked, setClicked] = useState(false);

  const clickHandler = () => {
    console.log('Burger Clicked');
    setClicked(!clicked);
  };

  return (
    <div>
      <div className="top-wrap">
        <div className="Navbar-wrap container">
          <NavLink to="/" className="logo">
            <img className="logo-image" src={Logo} alt="logo" />
          </NavLink>
          <div onClick={clickHandler} className="burger-menu">
            {clicked ? (
              <CloseIcon style={{ fontSize: '2.5rem', color: 'white' }} />
            ) : (
              <MenuIcon style={{ fontSize: '2.5rem', color: 'white' }} />
            )}
          </div>
          <nav>
            <ul className={clicked ? 'menu-list' : 'menu-list-close'}>
              {menuLinks.map((link, i) => {
                return (
                  <li key={i}>
                    <NavLink
                      onClick={() => {
                        setClicked(!clicked);
                      }}
                      to={link.url}
                      exact
                      activeclassname="active"
                    >
                      {link.name}{' '}
                    </NavLink>
                  </li>
                );
              })}
              <IconButton
                style={navIconStyle}
                target="_blank"
                href="https://www.linkedin.com/in/ranjeet-kumar-a4a928a9/"
              >
                <LinkedInIcon />
              </IconButton>

              <IconButton
                style={navIconStyle}
                target="_blank"
                href="https://github.com/Ranjeet2311"
              >
                <GitHubIcon />
              </IconButton>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
