import React, { useState } from "react";
import styles from "./shop.module.css";
import { MySlider } from "./Slider";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Autocomplete } from "./Autocomplete";
export const Shop = () => {
  const games = useSelector(state => state.login.games)
  const navigate = useNavigate();

  const [selectedGenre, setSelectedGenre] = useState("");

  const filteredGames =
    selectedGenre === ""
      ? games
      : games.filter((game) => game.genre === selectedGenre);

  return (
    <div className={styles.container}>
      <img
        className={styles.mimage}
        src="https://web.archive.org/web/20230623195818im_/https://cdn.akamai.steamstatic.com/steam/clusters/frontpage/45ae6347736f32d88e2394aa/page_bg_english.jpg?t=1687371561"
        alt="Shop Background"
        onClick={() => {navigate(`/page?game=${games[1].title}`)}}
      />
      <Autocomplete/>
      <div className={styles.shop}>
        <div className={styles.main}>
            <p className={styles.mainrec}>Рекомендуемое</p>
          <MySlider />
          <hr className={styles.hr} />
          <p className={styles.mainrec} style={{marginTop: "25px"}}>Новинки</p>
          <div className={styles.itemRec}>
            <div className={styles.bigGames}>
            <div className={styles.bigGame}>
              <img className={styles.bigimg} alt="small_image" src={games[2].images.libimg} onClick={() => {navigate(`/page?game=${games[2].title}`)}}/>
            
              
              </div>
              <div className={styles.bigGame}>
              <img className={styles.bigimg} alt="small_image" src={games[3].images.libimg} onClick={() => {navigate(`/page?game=${games[3].title}`)}}/>
              </div>
              <div className={styles.bigGame}>
              <img className={styles.bigimg} alt="small_image" src={games[1].images.libimg} onClick={() => {navigate(`/page?game=${games[1].title}`)}}/>
              </div>
            </div>
          </div>
          <p className={styles.mainrec} >Категории</p>
        </div>
        
        <div className={styles.gcontainer}>
          <div className={styles.genres}>
            {["Шутеры", "РПГ", "Инди-игры", "Головоломки", "Гонки"].map(
              (genre) => (
                <div
                  key={genre}
                  className={`${styles.genre} ${
                    selectedGenre === genre ? styles.activeGenre : ""
                  }`}
                  onClick={() => setSelectedGenre(genre)}
                >
                  {genre}
                </div>
              )
            )}
          </div>
        </div>

        <div className={styles.genregames}>
          {filteredGames.length > 0 ? (
            filteredGames.map((game) => (
              <div key={game.title} className={styles.game }  onClick={()=>{navigate(`/page?game=${game.title}`)}}>
                <img
                  className={styles.genreimg}
                  src={game.images.smallimg}
                  alt="small_image"
                />
                <div className={styles.price} >{`${game.price} BYN`}</div>
              </div>
            ))
          ) : (
            <div className={styles.noGames}>Нет игр в выбранном жанре!</div>
          )}
        </div>
      </div>
    </div>
  );
};
