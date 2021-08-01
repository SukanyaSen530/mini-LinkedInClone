import { Avatar } from "@material-ui/core";
import React from "react";
import "./SideBar.css";
import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";

function SideBar() {
  const user = useSelector(selectUser);

  const recentItem = (topic, ind) => {
    return (
      <div key={ind} className="sidebar__recentItem">
        <span className="sidebar__hash">
          <p>#{topic}</p>
        </span>
      </div>
    );
  };

  const recentItems = [
    "reactjs",
    "olympics",
    "react jobs",
    "tours",
    "programming",
  ];

  return (
    <section className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://miro.medium.com/max/2340/1*3QFRA8qNX4i9O0t6K_6xbw.png"
          alt=""
        />
        <div className="sidebar__avatar">
          <Avatar src={user.photoURL} />
        </div>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you!</p>
          <p className="sidebar__statNumber">2,345</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on Post</p>
          <p className="sidebar__statNumber">2,222</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItems.map((item, ind) => recentItem(item, ind))}
      </div>
    </section>
  );
}

export default SideBar;
