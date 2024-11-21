import React, { useState } from "react";
import { useSelector } from "react-redux"; 
import styles from "./autocomplete.module.css";
import { useNavigate } from "react-router";

export const Autocomplete = () => {
  const games = useSelector((state) => state.login.games);
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [filteredGames, setFilteredGames] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.trim() === "") {
      setFilteredGames([]);
    } else {
      const filtered = games.filter((game) =>
        game.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredGames(filtered);
    }
  };

  const handleSelect = (title) => {
    setInputValue(title); 
    setFilteredGames([]); 
    navigate(`/page?game=${title}`)
  };

  return (
    <div className={styles.autocomplete}>
      <input
        type="text"
        className={styles.input}
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Поиск..."
      />
      {filteredGames.length > 0 && (
        <ul className={styles.suggestions}>
          {filteredGames.map((game) => (
            <li
              key={game.key}
              className={styles.suggestion}
              onClick={() => handleSelect(game.title)}
            >
              {game.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
