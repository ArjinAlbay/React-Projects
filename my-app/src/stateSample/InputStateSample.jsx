import React, { useState } from "react";

function InputStateSample() {
  let game = [`metin2`, `knight`, `cs go`, `fifa2007`];

  const [games, setGames] = useState(game);

  const [newGame, setnewGame] = useState(``);

  let newGameAdd = () => {
    setnewGame(``);
    setGames([...games, newGame]);
  };

  let removeList = () => {
    setGames([]);
  };

  return (
    <>
      <ul>
        {games.map((item, key) => {
          return <li key={key}> {item} </li>;
        })}
      </ul>

      <input
        type="text"
        value={newGame}
        onChange={(e) => setnewGame(e.target.value)}
      />
      <button onClick={() => newGameAdd()}> new game</button>
      <button onClick={() => removeList()}>Remove List</button>
    </>
  );
}

export default InputStateSample;
