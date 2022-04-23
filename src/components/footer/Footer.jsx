import React from "react";
import Link from "../link/Link";
import "./Footer.css";

function Footer() {
  const linksFooterLeft = [
    "About",
    "Advertising",
    "Business",
    "How Search works",
  ];
  const linksFooterRight = ["Privacy", "Terms", "Settings"];

  const urlsFooterLeft = [
    "https://about.google/",
    "https://ads.google.com/",
    "https://www.google.com/services/",
    "https://www.google.com/search/howsearchworks/?fg=1",
  ];
  const urlsFooterRight = [
    "https://policies.google.com/privacy?hl=en-BE&fg=1",
    "https://policies.google.com/terms?hl=en-BE&fg=1",
  ];

  return (
    <div className="footer">
      <div className="top">Belgium</div>
      <div className="bottom">
        <div className="left-side">
          {linksFooterLeft.map((v, i) => (
            <Link key={i} linkName={v} url={urlsFooterLeft[i]} />
          ))}
        </div>
        <div className="right-side">
          <Link linkName={linksFooterRight[0]} url={urlsFooterRight[0]} />
          <Link linkName={linksFooterRight[1]} url={urlsFooterRight[1]} />
          <Link linkName={linksFooterRight[2]} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
