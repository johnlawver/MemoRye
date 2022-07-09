import { useEffect, useState } from "react";
import { randomChoice, say } from "../utils";
import Card from "./Card";
const colors = ["red", "orange", "yellow", "green", "blue"];

const CardDeck = ({ decks }) => {
  const [activeCard, setActiveCard] = useState(randomChoice(decks));

  const handleCardSwap = (e) => {
    speechSynthesis.cancel();
    setActiveCard(randomChoice(decks));
  };

  const replaySound = (e) => {
    e.stopPropagation();
    speechSynthesis.cancel();
    say(activeCard.name);
  };
  useEffect(() => {
    setActiveCard(randomChoice(decks));
  }, [decks]);

  useEffect(() => {
    say(activeCard.name);
  }, [activeCard]);
  return (
    <Card
      icon={activeCard.icon}
      name={activeCard.name}
      set={activeCard.set}
      color={randomChoice(colors)}
      click={handleCardSwap}
      replaySound={replaySound}
    />
  );
};

export default CardDeck;
