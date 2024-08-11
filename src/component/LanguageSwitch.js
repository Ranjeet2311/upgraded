import { useTranslation } from "react-i18next";
import "../style/lang-switch.scss";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import de from "../images/flags/de.svg";
import si from "../images/flags/si.svg";
import us from "../images/flags/us.svg";
import earth from "../images/flags/globe.png";

const language = [
  { code: "en", lang: "Eng", img: us },
  { code: "gr", lang: "Ger", img: de },
  { code: "slo", lang: "Slo", img: si },
];

function LanguageSwitch() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { i18n } = useTranslation();
  const open = Boolean(anchorEl);

  function changeLangHandle(lang) {
    i18n.changeLanguage(lang);
    setAnchorEl(null);
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="lang-switch">
        <Button
          className="text-light btn bg-transparent border-0 lang-btn"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <img
            className="rotate"
            style={{ maxWidth: "30px" }}
            src={earth}
            alt="world-icon"
            loading="lazy"
          />
          Lang
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          onClose={handleClose}
          open={open}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {language &&
            language.map((lan, i) => {
              return (
                <MenuItem
                  key={i}
                  className={
                    lan.code === i18n.language ? "bg-primary text-light" : ""
                  }
                  onClick={() => changeLangHandle(lan.code)}
                >
                  <img
                    style={{ maxWidth: "20px", marginRight: "4px" }}
                    src={lan.img}
                    alt="lan.lang"
                    loading="lazy"
                  />
                  {lan.lang}
                </MenuItem>
              );
            })}
        </Menu>
      </div>
    </>
  );
}

export default LanguageSwitch;
