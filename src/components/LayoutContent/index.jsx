import React, { useEffect, useRef, useState } from "react";
// import { useSelector } from 'react-redux';
import { useLocation, NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import Logo from "../../assets/logo.svg";
import ChevronDown from "../../assets/chevron-down.svg";
import Logout from "../../assets/log-out.svg";
import { ROUTES_CONTENT, ROUTES_CONTENT_USER } from "../../utils/constants";
import "./index.scss";
import Avatar from "../common/Avatar";
import Popover from "@mui/material/Popover";
// import AuthStore from './../../components/common/AuthStore';
// import { useGetUserDetailsMutation } from '../../containers/Settings/store/apiService';
import Skeleton from "../common/Skeleton";
import Loader from "../Loader";
import arrowLeft from "../../assets/arrow-left.svg";
import ThemeToggle from "../common/ThemeToggle";

const MOCK_USER = {
  FirstName: "John",
  LastName: "Doe",
  role: "Admin",
};

export default function LayoutContent({
  title,
  headerItemsLeft,
  headerItemsRight,
  children,
  backButtonRoute,
}) {
  // const userData = useSelector((state) => state.userData || {});
  // const { user, loadingRefreshToken } = userData;

  // const [getUserDetails, { isLoading }] = useGetUserDetailsMutation();
  // const [refreshToken] = useRefreshTokenMutation();

  const location = useLocation();
  const { pathname } = location;
  // const showInnerDocs = pathname.includes('/organisations/');

  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setMenuOpen(false);
  };

  const logout = () => {
    console.log("Mock Logout triggered");
    // Mock logout logic
    window.location.reload();
  };

  // const creditExhausted = false;

  // const [getUserDetails, { isLoading, data }] = useGetUserDetailsMutation();

  // useEffect(() => {
  //     const tempFn = async () => {
  //         if (!user || !user.FirstName) {
  //             const response = await getUserDetails(); // Fetch user details
  //             console.log('getUserDetails response:', response); // Debug log
  //         }
  //     };
  //     tempFn();
  // }, [user, getUserDetails]);

  const creditExhausted = false;

  return (
    <main
      className="layoutContent clearfix"
      style={{ height: creditExhausted ? "calc(100% - 44px)" : "100%" }}
    >
      {/* {loadingRefreshToken && <Loader position="fixed" />} */}
      <aside>
        <div>
          <div className="upperHead">
            <img src={Logo} alt="" />
          </div>
          {ROUTES_CONTENT.map((routeKey) => {
            const { path, name, imgSrc } = routeKey;
            // const isActive = showInnerDocs && path === "/";
            return (
              <React.Fragment key={path}>
                <NavLink
                  to={path}
                  test-sidemenu="sidemunu"
                  //   className={() =>
                  //     isActive || pathname === path ? "active" : ""
                  //   }
                >
                  <img className="imgIcon" src={imgSrc} alt="" />
                  {name}
                </NavLink>
              </React.Fragment>
            );
          })}
        </div>
        <div>
          {ROUTES_CONTENT_USER.map((routeKey) => {
            const { path, name, imgSrc } = routeKey;
            // const isActive = showInnerDocs && path === "/";
            return (
              <React.Fragment key={path}>
                <NavLink
                  to={path}
                  test-sidemenu="sidemunu"
                  //   className={() =>
                  //     isActive || pathname === path ? "active" : ""
                  //   }
                >
                  <img className="imgIcon" src={imgSrc} alt="" />
                  {name}
                </NavLink>
              </React.Fragment>
            );
          })}
          <div className="userCard">
            <div className="details">
              <Avatar
                height={40}
                width={40}
                name={`${MOCK_USER.FirstName.slice(
                  0,
                  1
                )}${MOCK_USER.LastName.slice(0, 1)}`}
              />
              <div>
                <div className="name">
                  {`${MOCK_USER.FirstName} ${MOCK_USER.LastName}`}
                </div>
                <div className="role">{MOCK_USER.role}</div>
              </div>
            </div>
            <div className={`icon ${menuOpen && "open"}`} onClick={handleClick}>
              <img src={ChevronDown} alt="Chevron Down" />
            </div>
          </div>
        </div>
      </aside>
      <section className="mainContent">
        {title && (
          <header>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              {backButtonRoute && (
                <NavLink to={backButtonRoute} className="backButton">
                  <img src={arrowLeft} alt="" />
                </NavLink>
              )}
              <span>{title ? title : "s"}</span>
              {headerItemsLeft}
            </div>
            <div>
              {headerItemsRight}
              <ThemeToggle />
            </div>
          </header>
        )}
        <div className="children">{children}</div>
      </section>
      <Popover
        id="user-menu-popover"
        open={menuOpen}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <div className="menuWrapper">
          <div className="menuItems logout" onClick={logout}>
            <img src={Logout} alt="" />
            Logout
          </div>
        </div>
      </Popover>
    </main>
  );
}

LayoutContent.propTypes = {
  title: PropTypes.string,
  headerItemsLeft: PropTypes.node,
  headerItemsRight: PropTypes.node,
  children: PropTypes.node,
  backButtonRoute: PropTypes.string,
};
