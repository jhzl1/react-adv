import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages/index";

import logo from "../logo.svg";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

        <Routes>
          <Route path="/lazy1" element={<LazyPage1 />} />

          <Route path="/users" element={<LazyPage2 />} />

          <Route path="/" element={<LazyPage3 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
