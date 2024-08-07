import React from "react";
import { NavLink } from "react-router-dom";
import Avatar from "../images/avatar-second.png";
import backgroundImage from "../images/background.jpg";
import Heading from "../component/Heading";
import Divider from "../component/Divider";

function NotFound() {
  return (
    <div className="text-center container">
      {/* <img className="background" src={backgroundImage} alt="" /> */}
      <div>
        <Heading text="< 404 page />" />
        <h4 className="text-light w-50 text-center ms-auto me-auto">
          Oops! Looks like you've stumbled upon a lost page. Don't worry, click
          on the avatar below or logo to return back.
        </h4>
        <div>
          <NavLink to="/" className="ms-2">
            <img className=" w-25" src={Avatar} alt="logo" />
          </NavLink>
        </div>
        <Divider />
      </div>
    </div>
  );
}

export default NotFound;
