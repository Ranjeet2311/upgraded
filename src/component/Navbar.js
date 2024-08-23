import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../images/new-logo.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IconButton from "@mui/material/IconButton";
import StaticModal from "./StaticModal";
import ContactForm from "./ContactForm";
import LanguageSwitch from "./LanguageSwitch";
import { useTranslation } from "react-i18next";

const menuLinks = [
  { name: "Home", url: "/" },
  { name: "Expertise", url: "/expertise" },
  { name: "Experience", url: "/experience" },
  { name: "Repositories", url: "/repositories" },
];

const navIconStyle = {
  marginRight: "2rem",
  color: "white",
  border: "1px solid white",
  background: "white",
  margin: "6px 12px",
};

function Navbar() {
  const [clicked, setClicked] = useState(false);

  const clickHandler = () => {
    // console.log('Burger Clicked');
    setClicked(!clicked);
  };
  const { t } = useTranslation();

  return (
    <div className="top-wrap">
      <div className="Navbar-wrap container">
        <NavLink to="/" className="logo">
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
                  <NavLink
                    onClick={() => {
                      setClicked(!clicked);
                    }}
                    to={link.url}
                    exact
                    activeClassName="active"
                  >
                    {t(link.name)}
                  </NavLink>
                </li>
              );
            })}
            <li>
              <StaticModal title={t("Sending message to @Ranjeet")}>
                <ContactForm downloadCv="true"> </ContactForm>
              </StaticModal>
            </li>
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

            <div className="d-none d-lg-block">
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
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
