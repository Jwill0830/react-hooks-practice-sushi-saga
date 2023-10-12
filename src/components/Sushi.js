import React from "react";

function Sushi({ sushi, onEat }) {
  return (
    <div className="sushi">
      <div className="plate" onClick={() => onEat(sushi.id, sushi.price)}>
        {sushi.eaten ? null : (
          <img src={sushi.img_url} alt={sushi.name} width="100%" />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
