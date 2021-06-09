import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { IconContext } from "react-icons";
import styles from "./Navbar.module.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import whiteLogo from "../assets/logoWhite.svg";

function Navbar(props) {
  const logoutHandler = () => {
    localStorage.setItem("username", "");
    localStorage.setItem("token", "");
    window.location = "/";
  };

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#2D62ED" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars" style={{ marginLeft: "2%" }}>
            <FaIcons.FaBars
              onClick={showSidebar}
              value={{ color: "#2D62ED" }}
            />
          </Link>
          <strong className={styles.nav}>
            <p
              style={{
                marginLeft: "8%",
                marginTop: "1%",
                marginBottom: "1%",
                fontSize: "1.8rem",
              }}
            >
              <span
                style={{
                  borderTopColor: "#2D62ED",
                  borderTop: "5px solid #2D62ED",
                  borderRadius: "0",
                }}
              >
                {props.prefix}
              </span>
              {props.suffix}
            </p>
          </strong>
        </div>
      </IconContext.Provider>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul
            className="nav-menu-items"
            onClick={showSidebar}
            style={{ marginLeft: "0", paddingLeft: "0" }}
          >
            <li
              className="navbar-toggle"
              style={{ alignItems: "right", textAlign: "right" }}
            >
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>

            <div
              className="row container-fluid"
              style={{ marginTop: "5%", marginBottom: "8%" }}
            >
              <div
                className="col-lg-3 col-sm-3"
                style={{ textAlign: "center", marginBottom: "2%" }}
              >
                <img src={whiteLogo} height="65px" alt="white-logo" />
              </div>
              <div className="col-lg-9 col-sm-9">
                <h3 style={{ color: "white", marginBottom: "2%" }}>
                  Beyond Static
                </h3>
              </div>
            </div>

            <li className="nav-text">
              <Link to="/dashboard">
                <AiIcons.AiFillHome />
                <span>Dashboard</span>
              </Link>
            </li>

            <li className="nav-text">
              <Link to="/createproject">
                <AiIcons.AiFillFolderAdd />
                <span>Create Project</span>
              </Link>
            </li>

            <li className="nav-text">
              <Link to="/docs">
                <IoIcons.IoIosPaper />
                <span>Documentation</span>
              </Link>
            </li>

            <li className="nav-text">
              <Link to="/profile">
                <AiIcons.AiOutlineUser />
                <span>Profile</span>
              </Link>
            </li>

            <li className="nav-text">
              <Link to="/aboutus">
                <AiIcons.AiOutlineTeam />
                <span>About Us</span>
              </Link>
            </li>

            <li className="nav-text">
              <Link to="/contribute">
                <AiIcons.AiFillGithub />
                <span>Contribute</span>
              </Link>
            </li>

            <li className="nav-text">
              <Link onClick={logoutHandler}>
                <AiIcons.AiOutlineLogout />
                <span>Logout</span>
              </Link>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
