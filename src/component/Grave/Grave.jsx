import "./Grave.css";
import React from "react";

function Grave({childrenNum,clsass,techier}) {
  return (
    <div className="grave">
      <h1 data-testid="children-num">{childrenNum}</h1>
      <h1 data-testid="clsass-num">{clsass}</h1>
      <h1 data-testid="techierName">{techier}</h1>

    </div>
  );
};

export default Grave;
