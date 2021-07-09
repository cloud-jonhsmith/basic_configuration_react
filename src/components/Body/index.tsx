import React from "react";
import "./body.scss";
const logo = require("../../images/logo.svg");

const Body = () => (
  <>
    <h1 className="text-center">
      This is a <span className="text-yellow">Body</span> section
    </h1>
    <div className="container">
      <main className="grid col-3 med-col-2 small-col-1">
        <div className="card item-card">Card 1</div>
        <div className="card item-card">Card 2</div>
        <div className="card item-card">Card 3</div>
        <div className="card">
          <img
            className="rotate-left bg-color border-circle "
            src={logo}
            alt=""
          />
        </div>
        <div className="card">
          <img
            className="rotate-right bg-color border-circle "
            src={logo}
            alt=""
          />
        </div>
        <div className="card">
          <img
            className="rotate-left bg-color border-circle"
            src={logo}
            alt=""
          />
        </div>
      </main>
    </div>
  </>
);

export default Body;
