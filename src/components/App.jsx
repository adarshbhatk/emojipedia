import React from "react";
import Card from "./Card.jsx";
import emojipedia from "../emojipedia";

function emojiCard(emoji) {
  return (
    <Card
      key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      detail={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(emojiCard)}</dl>
    </div>
  );
}

export default App;
