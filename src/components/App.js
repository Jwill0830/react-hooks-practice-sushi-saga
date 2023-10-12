import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]);
  const [budget, setBudget] = useState(100);  // Assume a budget of $100
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setSushis(data));
  }, []);

  function handleMoreButtonClick() {
    setCurrentIndex((prevIndex) => (prevIndex + 4) % sushis.length);
  }

  function handleEatSushi(id, price) {
    if (price > budget) return;  // Can't eat sushi if it exceeds the budget

    setSushis(prevSushis =>
      prevSushis.map(sushi =>
        sushi.id === id ? { ...sushi, eaten: true } : sushi
      )
    );
    setBudget(prevBudget => prevBudget - price);
  }

  return (
    <div className="app">
      <SushiContainer 
        sushis={sushis.slice(currentIndex, currentIndex + 4)} 
        onEat={handleEatSushi} 
        onMore={handleMoreButtonClick}
      />
      <Table plates={sushis.filter(sushi => sushi.eaten)} budget={budget} />
    </div>
  );
}

export default App;
