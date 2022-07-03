import React from "react";
import "./ChannelRow.css";
import { Avatar } from "@mui/material";
import CheckCircleOutlinedOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

function ChannelRow({
  image,
  channel,
  subs,
  verified,
  noOfVideo,
  description,
}) {
  return (
    <div className="channelRow">
      <Avatar className="channelRow__logo" alt={channel} src={image} />
      <div className="channelRow__text">
        <h4>
          {channel}
          {verified && <CheckCircleOutlinedOutlinedIcon />}
        </h4>
        <p>
          {subs} subscribers . {noOfVideo} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
