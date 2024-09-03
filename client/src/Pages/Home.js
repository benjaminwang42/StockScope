import React from "react";
import "../Styles/Home.css";
import LayersIcon from "@mui/icons-material/Layers";

function Home() {
  return (
    <div className="row home">
      <div className="col-8 col-sm-8 home-display px-0"></div>
      <div className="col-4 col-sm-4 home-actions px-0">
        <div className="row">
          <div className="col-6 col-sm-6 card">
            <LayersIcon />
            Action1
          </div>
          <div className="col-6 col-sm-6 card">
            <LayersIcon />
            Action2
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
