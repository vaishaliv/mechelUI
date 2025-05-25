import React from "react";
import { GiSpinningBlades } from "react-icons/gi";

const TopBanner = () => {
  return (
    <div
      // className="fixed-top"
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#26989C",
        color: "aliceblue",
      }}
    >
      <GiSpinningBlades
        className="mainIcon"
        style={{
          margin: "0.5em",
        }}
        color="aliceblue"
        size={15}
      />
      MECHEL SYSTEMS AND SERVICES
      <GiSpinningBlades
        className="mainIcon"
        style={{
          margin: "0.5em",
        }}
        color="aliceblue"
        size={15}
      />
    </div>
  );
};

export default TopBanner;
