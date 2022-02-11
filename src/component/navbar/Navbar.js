import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import MenuLinks from "./MenuList";
import Fab from "@mui/material/Fab";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../avatar/fevicon-Avatar.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IconButton from "@mui/material/IconButton";

function Navbar() {
  const [clicked, setClicked] = useState(false);

  const MenuList = MenuLinks.map(({ url, title }, index) => {
    return (
      <li key={index}>
        <NavLink to={url}> {title} </NavLink>
      </li>
    );
  });

  const clickHandler = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <div className="navbar-wrapper">
        <div className="logo">
          <img className="logo-image" src={Logo} alt="logo" />
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
      </div>
    </>
  );
}

export default Navbar;

// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Button from "@mui/material/Button";
// import MenuItem from "@mui/material/MenuItem";

// const MenuLinks = [
//   {
//     title: "Home",
//     url: "/",
//   },
//   {
//     title: "About",
//     url: "/about-me",
//   },
//   {
//     title: "Skills",
//     url: "/skills",
//   },
//   {
//     title: "Projects",
//     url: "/projects",
//   },
// ];

// function Navbar() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };
//   return (
//     <AppBar position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
//           >
//             LOGO
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: "bottom",
//                 horizontal: "left",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "left",
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: "block", md: "none" },
//               }}
//             >
//               {MenuLinks.map(({ title, url }) => (
//                 <MenuItem key={title} onClick={handleCloseNavMenu}>
//                   <Button href={url} textalign="center">
//                     {title}
//                   </Button>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
//           >
//             LOGO
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
//             {MenuLinks.map(({ title, url }) => (
//               <Button
//                 href={url}
//                 key={title}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: "white", display: "block" }}
//               >
//                 {title}
//               </Button>
//             ))}
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }

// export default Navbar;
