import React, { useState, useRef, useEffect } from "react";
import { Outlet, NavLink } from "react-router-dom";
import MenuLinks from "./MenuList";
import Fab from "@mui/material/Fab";
import { gsap } from "gsap";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../avatar/fevicon-Avatar.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IconButton from "@mui/material/IconButton";

function Navbar() {
  const [clicked, setClicked] = useState(false);

  const logo = useRef();

  const MenuList = MenuLinks.map(({ url, title }, index) => {
    return (
      <li key={index}>
        <NavLink className={clicked ? "menu-list" : "menu-list-close"} to={url}>
          {" "}
          {title}{" "}
        </NavLink>
      </li>
    );
  });

  const clickHandler = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    gsap.fromTo(
      logo.current,
      { x: "-1000", scale: 1, duration: 1 },
      { x: "0", autoAlpha: 1, duration: 1, ease: "back" }
    );
  }, []);

  return (
    <header className="navbar-wrapper">
      <div className="logo">
        <img className="logo-image" src={Logo} alt="logo" ref={logo} />
      </div>

      <div onClick={clickHandler} className="burger-menu">
        {clicked ? (
          <div>
            <Fab variant="contained">
              <CloseIcon />
            </Fab>
          </div>
        ) : (
          <div>
            <Fab variant="contained">
              <MenuIcon />
            </Fab>
          </div>
        )}
      </div>

      <div className="navbar">
        <ul className={clicked ? "menu-list" : "menu-list-close"}>
          {MenuList}
          <IconButton
            target="_blank"
            href="https://www.linkedin.com/in/ranjeet-kumar-a4a928a9/"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton target="_blank" href="https://github.com/Ranjeet2311">
            <GitHubIcon />
          </IconButton>
        </ul>

        {/* <div className="git-icon">
            <Button>
              <GitHubIcon />
            </Button>
          </div>
          <div className="git-icon">
            <Button>
              <LinkedInIcon />
            </Button>
          </div> */}
      </div>

      <Outlet />
    </header>
  );
}

export default Navbar;
