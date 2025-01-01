import React, { useRef } from "react";
import { AiIcons, Io5Icon } from "../assets/icons/icons";
function Navbar(props) {
  const searchOnClick = (e) => {
    e.preventDefault();
  };
  return (
    <nav>
      <div className="nav-logo">
        <img
          src="/logoOnly.svg"
          alt="BonfyreWhisper logo"
          className="h-20 w-20"
        />
      </div>
      <div className="nav-details">
        <form action="/search" method="get" id="searchForm">
          <input
            type="search"
            id="search"
            name="q"
            placeholder="Search blogs..."
          />
          <button
            type="submit"
            aria-label="search button"
            onClick={searchOnClick}
          >
            <Io5Icon.IoSearchOutline />
          </button>
        </form>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Blogs</li>
          <li>Contact</li>
          <li id="loginBtn">
            <button aria-label="login button">
              <AiIcons.AiOutlineLogin />
              &nbsp;Login
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
