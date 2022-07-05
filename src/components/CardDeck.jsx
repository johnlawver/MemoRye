import { useEffect, useState } from "react";
import { cards } from "../josn/cards";
import { randomChoice, say } from "../utils";
import Card from ".//Card";

const CardDeck = () => {
  const [activeCard, setActiveCard] = useState(randomChoice(cards));

  const handleCardSwap = () => {
    setActiveCard(randomChoice(cards));
  };

  useEffect(() => {
    say(activeCard.name);
  }, [activeCard]);
  return (
    <Card
      icon={activeCard.icon}
      name={activeCard.name}
      set={activeCard.set}
      color="blue"
      click={handleCardSwap}
    />
  );
};

export default CardDeck;
