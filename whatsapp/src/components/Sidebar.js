import React from "react";
import "./Sidebar.css";
import SidebarChat from './SidebarChat';
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="http://cdn.epicstream.com/assets/uploads/ckeditor/images/1612289466_sub-buzz-11718-1591678685-12.png" />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlinedIcon/>
          <input type="text" placeholder="Search or start a new chat"/>
        </div>
      </div>

      <div className="sidebar__chats">
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>
      </div>
    </div>
  );
}

export default Sidebar;
