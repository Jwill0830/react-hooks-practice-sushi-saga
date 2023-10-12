import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushis, onEat, onMore }) {
  return (
    <div className="belt">
      {sushis.map(sushi => (
        <Sushi key={sushi.id} sushi={sushi} onEat={onEat} />
      ))}
      <MoreButton onClick={onMore} />
    </div>
  );
}

export default SushiContainer;
