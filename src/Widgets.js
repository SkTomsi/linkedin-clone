import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Tomcy is bacc", "Top News - 768 readers")}
      {newsArticle("Budget 2022 LIVE Updates")}
      {newsArticle("Cryptocurrency Tax Budget Impact", "708 readers")}
      {newsArticle("Defence Budget", "68 readers")}
      {newsArticle(
        "Covid-19: India reports 1.67 lakh new cases, 1,192 deaths",
        "Stay Safe"
      )}
    </div>
  );
}

export default Widgets;
