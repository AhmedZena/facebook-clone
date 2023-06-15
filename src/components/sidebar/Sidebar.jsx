import React from "react";
import "./sidebar.scss";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <img
              src={process.env.PUBLIC_URL + "/assets/icons/most-recent.png"}
              alt="Most Recent"
              className="sidebarListIcon"
            />
            <span className="sidebarListItemText">Most Recent</span>
          </li>
          <li className="sidebarListItem">
            <img
              src={process.env.PUBLIC_URL + "/assets/icons/covid.png"}
              alt="covid-19"
              className="sidebarListIcon"
            />
            <span className="sidebarListItemText">Covid-19 Information</span>
          </li>
          <li className="sidebarListItem">
            <img
              src={process.env.PUBLIC_URL + "/assets/icons/groups.png"}
              alt="Groups"
              className="sidebarListIcon"
            />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <img
              src={process.env.PUBLIC_URL + "/assets/icons/messenger.png"}
              alt="Messenger"
              className="sidebarListIcon"
            />

            <span className="sidebarListItemText">Messenger</span>
          </li>
          <li className="sidebarListItem">
            <img
              src={process.env.PUBLIC_URL + "/assets/icons/watch-videos.png"}
              alt="Watch Videos"
              className="sidebarListIcon"
            />

            <span className="sidebarListItemText">Watch Videos</span>
          </li>

          <li className="sidebarListItem">
            <img
              src={process.env.PUBLIC_URL + "/assets/icons/market.png"}
              alt="Market"
              className="sidebarListIcon"
            />
            <span className="sidebarListItemText">Market</span>
          </li>
          <li className="sidebarListItem">
            <img
              src={process.env.PUBLIC_URL + "/assets/icons/manage-pages.png"}
              alt="Manage Pages"
              className="sidebarListIcon"
            />
            <span className="sidebarListItemText">Manage Pages</span>
          </li>
          <li className="sidebarListItem">
            <img
              src={process.env.PUBLIC_URL + "/assets/icons/event.png"}
              alt="Events"
              className="sidebarListIcon"
            />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <img
              src={process.env.PUBLIC_URL + "/assets/icons/fund.png"}
              alt="Fundraisers"
              className="sidebarListIcon"
            />
            <span className="sidebarListItemText">Fundraisers</span>
          </li>
          <li className="sidebarListItem">
            <img
              src={process.env.PUBLIC_URL + "/assets/icons/3d-favourite.png"}
              alt="Saved"
              className="sidebarListIcon"
            />
            <span className="sidebarListItemText">Saved</span>
          </li>
          <li className="sidebarListItem">
            <img
              src={process.env.PUBLIC_URL + "/assets/icons/friends-list.png"}
              alt="Friends List"
              className="sidebarListIcon"
            />

            <span className="sidebarListItemText">Friends List</span>
          </li>
          <li className="sidebarListItem">
            <img
              src={process.env.PUBLIC_URL + "/assets/icons/messenger-kids.png"}
              alt="Messenger Kids"
              className="sidebarListIcon"
            />
            <span className="sidebarListItemText">Messenger Kids</span>
          </li>
          <li className="sidebarListItem">
            <img
              src={process.env.PUBLIC_URL + "/assets/icons/games.png"}
              alt="Games"
              className="sidebarListIcon"
            />
            <span className="sidebarListItemText">Games</span>
          </li>
          <li className="sidebarListItem">
            <img
              src={process.env.PUBLIC_URL + "/assets/icons/discount.png"}
              alt="Discounts"
              className="sidebarListIcon"
            />
            <span className="sidebarListItemText">Discounts</span>
          </li>
          <li className="sidebarListItem">
            <img
              src={process.env.PUBLIC_URL + "/assets/icons/movies.png"}
              alt="Movies"
              className="sidebarListIcon"
            />
            <span className="sidebarListItemText">Movies</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
