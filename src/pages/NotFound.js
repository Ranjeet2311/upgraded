import React from "react";
import { NavLink } from "react-router-dom";
import Avatar from "../images/avatar-second.png";
import Heading from "../component/Heading";
import Divider from "../component/Divider";
import Metadata from "../component/Metadata";

function NotFound() {
  return (
    <>
      <Metadata
        title="404 | Ranjeet Kumar"
        description="Explore the GitHub repositories of Ranjeet Kumar, showcasing a diverse range of web development projects. From advanced frontend applications built with Vue.js, React, and Angular, to backend integrations using Node.js and PHP, these repositories highlight his 7.5+ years of experience in crafting efficient, scalable, and high-performance code."
      />
      <div className="text-center container">
        <div>
          <Heading text="< 404 page />" />
          <h4 className="text-light w-50 text-center ms-auto me-auto">
            Oops! Looks like you've stumbled upon a lost page. Don't worry,
            click on the avatar below or logo to return back.
          </h4>
          <div>
            <NavLink to="/" className="ms-2">
              <img className=" w-25" src={Avatar} alt="logo" loading="lazy" />
            </NavLink>
          </div>
          <Divider />
        </div>
      </div>
    </>
  );
}

export default NotFound;
