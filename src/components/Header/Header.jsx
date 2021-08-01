import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterRoundedIcon from "@material-ui/icons/BusinessCenterRounded";
import CommentRoundedIcon from "@material-ui/icons/CommentRounded";
import NotificationsActiveRoundedIcon from "@material-ui/icons/NotificationsActiveRounded";
import { useDispatch } from "react-redux";
import { logout } from "../../features/userSlice";
import { auth } from "../../config/firebase";

import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <header className="header">
      <div className="header_left">
        <img
          src="https://image.flaticon.com/icons/png/512/174/174857.png"
          alt=""
        />
        <div className="header_search">
          <SearchIcon />
          <input type="text" placeholder="Search.." />
        </div>
      </div>
      <div className="header_right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterRoundedIcon} title="Jobs" />
        <HeaderOption Icon={CommentRoundedIcon} title="Messaging" />
        <HeaderOption
          Icon={NotificationsActiveRoundedIcon}
          title="Notification"
        />
        <HeaderOption
          avatar={user.photoURL}
          title={user.displayName}
          onClick={logoutOfApp}
        />
        <button
          style={{
            border: "none",
            color: "white",
            backgroundColor: "#0073b1",
            padding: "5px 10px",
            height: "30px",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "9px",
          }}
          onClick={logoutOfApp}
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
