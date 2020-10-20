import React, { useState, Fragment } from "react";
import "./App.css";
import PropTypes from "prop-types";
import Card from "./components/Card";
const API_URL = `https://status.dev.azure.com/_apis/status/health?api-version=6.0-preview.1`;

function App() {
  const [value, setValue] = useState("");

  const handleClick = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    console.log(data);
    const results = data.services.forEach((item, i) => (
      <Card key={item.geographies[i].id} item={item} />
    ));
  };

  return (
    <Fragment>
      <header className="header">
        <h1>Azure devops health checker</h1>
      </header>
      <div className="container">
        <h3>Inital data goes here</h3>
      </div>
      <div className="card-container">
        {/* cards go here */}
        <input
          type="submit"
          placeholder="Get more Data"
          onClick={handleClick}
        />
      </div>
    </Fragment>
  );
}

export default App;
