import { useState } from "react";
import CardDeck from "./components/CardDeck";
import Navbar from "./components/Navbar";
import { cards } from "./josn/cards";

function App() {
  const [activeDeckName, setActiveDeckName] = useState("animals");
  const activeDeck = cards.filter((card) => card.set == activeDeckName);

  return (
    <div className="App">
      <CardDeck decks={activeDeck} />
      <Navbar setDecks={setActiveDeckName} />
    </div>
  );
}

export default App;
