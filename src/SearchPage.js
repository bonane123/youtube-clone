import React from "react";
import "./SearchPage.css";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://upload.wikimedia.org/wikipedia/commons/8/85/HinhMdm_red_resize-400x400fill.jpg"
        channel="Public Relations"
        verified
        subs="698K"
        noOfVideo={223}
        description="Files are available under licenses specified on their description page. All structured data from the file namespace is available under the"
      />
      <hr />
      <VideoRow
        title="🌍Learn Arabic for general communication worldwide"
        views="3M"
        timestamp="4weeks ago"
        subs="698K"
        channelImage="https://upload.wikimedia.org/wikipedia/commons/8/85/HinhMdm_red_resize-400x400fill.jpg"
        channel="Public Relations"
        image="https://upload.wikimedia.org/wikipedia/commons/a/a6/%D8%A3%D8%AD%D9%85%D8%AF_%D9%85%D8%AD%D9%85%D8%AF_%D8%B5%D9%81%D9%88%D8%AA_-_%D8%AA%D8%A7%D8%B1%D9%8A%D8%AE%D9%86%D8%A7_%D8%A7%D9%84%D8%AD%D8%A7%D9%81%D9%84_%D9%8A%D9%88%D8%AA%D9%8A%D9%88%D8%A8.jpg"
        description="Files are available under licenses specified on their description page. All structured data from the file namespace is available under the"
      />
    </div>
  );
}

export default SearchPage;
