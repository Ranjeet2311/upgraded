import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterProjects } from "../store/features/projectSlice";
import { useTranslation } from "react-i18next";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import vue from "../images/vue-js-icon.svg";
import angular from "../images/angular-icon.svg";
import react from "../images/react-js-icon.svg";
import browse from "../images/all-icon.svg";
import webApp from "../images/web-app.png";

const tabs = [
  { title: "All", ref: "all", imgSrc: browse },
  { title: "Full Stack", ref: "fullStack", imgSrc: webApp },
  { title: "React", ref: "react", imgSrc: react },
  { title: "Vue", ref: "vue", imgSrc: vue },
  { title: "Angular", ref: "angular", imgSrc: angular },
];

export default function ProjectFilterSection() {
  const { tabValue } = useSelector((state) => state.projects);
  const dispatch = useDispatch();
  function filterHandler(categoty) {
    dispatch(filterProjects(categoty));
  }
  const { t } = useTranslation();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="row mt-2 mt-lg-4 pt-4 mb-1 pt-lg- w-100 justify-content-between">
      <div className="col-12 col-lg-10">
        <p className="">
          {t("Now displaying list of")}
          <strong className="mx-1">"{tabValue.toUpperCase()}"</strong>
          {t("repositories, for more repositories checkout my")}
          <span className="ms-1">
            <a
              className="lead bg-white px-2 rounded-1 btn-bg"
              href="https://github.com/Ranjeet2311"
              target="blank"
            >
              github
            </a>
          </span>
        </p>
      </div>
      <div className="dropdown col-12 col-lg-2">
        <Button
          className="text-light btn bg-transparent border-0 lang-btn ps-lg-0"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          Sort Options
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
          {tabs &&
            tabs.map((tab) => {
              return (
                <MenuItem key={tab.ref} onClick={() => filterHandler(tab.ref)}>
                  <img
                    style={{ maxWidth: "20px", marginRight: "4px" }}
                    width={20}
                    src={tab.imgSrc}
                    alt={tab.ref}
                  />
                  <span className="lang-text">{tab.title}</span>
                </MenuItem>
              );
            })}
        </Menu>
        {/* <ul className="dropdown-menu">
          {tabs.map((tab) => {
            return (
              <li key={tab.ref} onClick={() => filterHandler(tab.ref)}>
                <button className="btn ps-3">
                  <img
                    className="me-2 rounded-0"
                    // style={{ filter: "grayscale(1)" }}
                    width={20}
                    src={tab.imgSrc}
                    alt={tab.ref}
                  />
                  <span>{tab.title}</span>
                </button>
              </li>
            );
          })}
        </ul> */}
      </div>
    </div>
  );
}
