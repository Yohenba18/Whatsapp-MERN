import React from "react";
import "./Chat.css";
import { Avatar,IconButton } from "@material-ui/core";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function Chat() {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src="https://pbs.twimg.com/profile_images/1214426391946629121/bb12yAuv_400x400.png" />
        <div className="chat__headerInfo">
          <h3>Room Info</h3>
          <p>last seen at</p>
        </div>
        
        <div className="chat__headerRight">
        <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Chat;
