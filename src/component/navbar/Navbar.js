import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
// import menuLinks from "./MenuList";

// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
import Logo from "../avatar/fevicon-Avatar.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IconButton from "@mui/material/IconButton";

const menuLinks = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about-me" },
  { name: "Skills", url: "/skills" },
  { name: "Projects", url: "/projects" },
  // { name: "Serach", url: "/serach" },
];

function Navbar() {
  const [clicked, setClicked] = useState(false);

  const clickHandler = () => {
    console.log("Burger Clicked");
    setClicked(!clicked);
  };

  return (
    <div>
      <nav>
        <div className="Navbar-wrap">
          <div className="logo">
            <img className="logo-image" src={Logo} alt="logo" />
          </div>
          <div onClick={clickHandler} className="burger-menu">
            {clicked ? (
              <CloseIcon style={{ fontSize: "2.5rem", color: "white" }} />
            ) : (
              <MenuIcon style={{ fontSize: "2.5rem", color: "white" }} />
            )}
          </div>

          <ul className={clicked ? "menu-list" : "menu-list-close"}>
            {menuLinks.map((link, i) => {
              return (
                <li key={i}>
                  <Link
                    onClick={() => {
                      setClicked(!clicked);
                    }}
                    to={link.url}
                  >
                    {link.name}{" "}
                  </Link>
                </li>
              );
            })}

            <IconButton
              style={{
                marginRight: "2rem",
                color: "#000000",
                border: "1px solid white",
              }}
              target="_blank"
              href="https://www.linkedin.com/in/ranjeet-kumar-a4a928a9/"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              style={{
                marginRight: "2rem",
                color: "#000000",
                border: "1px solid white",
              }}
              target="_blank"
              href="https://github.com/Ranjeet2311"
            >
              <GitHubIcon />
            </IconButton>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navbar;

// ===========================
// import React, { useState, useRef, useEffect } from "react";
// import { Outlet, NavLink } from "react-router-dom";
// import MenuLinks from "./MenuList";
// import Fab from "@mui/material/Fab";
// import { gsap } from "gsap";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
// import Logo from "../avatar/fevicon-Avatar.jpg";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import IconButton from "@mui/material/IconButton";

// function Navbar() {
//   const [clicked, setClicked] = useState(false);

//   const logo = useRef();

//   const MenuList = MenuLinks.map(({ url, title }, index) => {
//     return (
//       <li className="menu-link" key={index}>
//         <NavLink to={url}> {title} </NavLink>
//       </li>
//     );
//   });

//   const clickHandler = () => {
//     setClicked(!clicked);
//   };

//   useEffect(() => {
//     gsap.fromTo(
//       logo.current,
//       { x: "-1000", scale: 1, duration: 1 },
//       { x: "0", autoAlpha: 1, duration: 1, ease: "back" }
//     );
//   }, []);

//   return (
//     <header className="header-wrap">
//       <div className="logo">
//         <img className="logo-image" src={Logo} alt="logo" ref={logo} />
//       </div>

//       <div onClick={clickHandler} className="burger-menu">
//         {clicked ? (
//           <div>
//             <Fab variant="contained">
//               <CloseIcon />
//             </Fab>
//           </div>
//         ) : (
//           <div>
//             <Fab variant="contained">
//               <MenuIcon />
//             </Fab>
//           </div>
//         )}
//       </div>

//       <nav className={clicked ? "navbar" : "close"}>
//         {/* <ul className={clicked ? "menu-list" : "menu-list-close"}> */}
//         <ul className="nav-menu">
//           {MenuList}

//           <IconButton
//             target="_blank"
//             href="https://www.linkedin.com/in/ranjeet-kumar-a4a928a9/"
//           >
//             <LinkedInIcon />
//           </IconButton>
//           <IconButton target="_blank" href="https://github.com/Ranjeet2311">
//             <GitHubIcon />
//           </IconButton>
//         </ul>
//       </nav>

//       <Outlet />
//     </header>
//   );
// }

// export default Navbar;
