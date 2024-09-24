import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../../images/new-logo.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IconButton from "@mui/material/IconButton";
import LanguageSwitch from "../LanguageSwitch";
import { useTranslation } from "react-i18next";
import SwitchToggle from "../SwitchToggle";
import { useDispatch } from "react-redux";
import { bodyColorHandler } from "../../store/features/switchSlice";
import { useSelector } from "react-redux";

const menuLinks = [
  { name: "Home", url: "#home" },
  { name: "Expertise", url: "#expertise" },
  { name: "Experience", url: "#experience" },
  { name: "Repositories", url: "#repositories" },
  { name: "Contact", url: "#contact" },
];

const navIconStyle = {
  marginRight: "2rem",
  color: "white",
  border: "1px solid white",
  background: "white",
  margin: "6px 12px",
};

export default function Navbar() {
  const [clicked, setClicked] = useState(false);
  const [showSwitch, setShowSwitch] = useState(false);

  const clickHandler = () => {
    // console.log('Burger Clicked');
    setClicked(!clicked);
  };

  const dispatch = useDispatch();
  const switchHandle = (e) => {
    setShowSwitch(!showSwitch);
    dispatch(bodyColorHandler(e.target.checked));
  };
  const { bodyColor } = useSelector((state) => state.switch);

  useEffect(() => {
    setShowSwitch(bodyColor);
  }, [bodyColor]);

  const { t } = useTranslation();
  return (
    <div className="top-wrap">
      <div className="Navbar-wrap container">
        <NavLink href="/" className="logo">
          <img className="logo-image" src={Logo} alt="logo" loading="lazy" />
        </NavLink>
        <div onClick={clickHandler} className="burger-menu">
          {clicked ? (
            <CloseIcon style={{ fontSize: "2.5rem", color: "white" }} />
          ) : (
            <MenuIcon style={{ fontSize: "2.5rem", color: "white" }} />
          )}
        </div>
        <nav>
          <ul className={clicked ? "menu-list" : "menu-list-close"}>
            {menuLinks.map((link, i) => {
              return (
                <li key={i}>
                  <a
                    onClick={() => {
                      setClicked(!clicked);
                    }}
                    href={link.url}
                    exact
                    activeClassName="active"
                  >
                    {t(link.name)}
                  </a>
                </li>
              );
            })}
            <li>
              <LanguageSwitch />
            </li>
            <IconButton
              className="animated-background border-0 mx-1 d-block d-lg-none"
              style={navIconStyle}
              target="_blank"
              href="https://www.linkedin.com/in/ranjeet-kumar-a4a928a9/"
            >
              <LinkedInIcon />
            </IconButton>

            <IconButton
              className="animated-background border-0 mx-1 d-block d-lg-none"
              style={navIconStyle}
              target="_blank"
              href="https://github.com/Ranjeet2311"
            >
              <GitHubIcon />
            </IconButton>
            <li onChange={switchHandle}>
              <SwitchToggle checked={showSwitch} />
            </li>

            {/* <div className="d-none d-lg-block">
              <div className="social-icons">
                <IconButton
                  target="_blank"
                  href="https://www.linkedin.com/in/ranjeet-kumar-a4a928a9/"
                >
                  <LinkedInIcon />
                  <span>Linkedin</span>
                </IconButton>

                <IconButton
                  target="_blank"
                  href="https://github.com/Ranjeet2311"
                >
                  <GitHubIcon />
                  <span>Github</span>
                </IconButton>
              </div>
            </div> */}
          </ul>
        </nav>
      </div>
    </div>
  );
}
