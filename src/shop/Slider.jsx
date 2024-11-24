import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './slider.module.css'
import './Slider.css'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
export const MySlider = () => {
  const games = useSelector(state => state.login.games);
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {games.map((slide, i) => {
        if (i>2) return 
        console.log(i)
        return (
          <div className={styles.item} key={slide.id} onClick={() => {navigate(`/page?game=${slide.title}`)}}>
            <div
              className={styles.itemImage}
              style={{
                width: "100%",
              }}
            >
              <img className={styles.image} alt="game_image" src={slide.images.smallimg}/>
              <div className={styles.desc}>
                <p className={styles.title}>{slide.title}</p>
                <div className={styles.preview}>
                  {slide.images.media.map((elem, i)=>{
                      if (i>3) return <div></div>
                      return <img className={styles.previmg} alt="preview" src={elem}/>
                  })}
                </div>
                <div className={styles.price}>{slide.price} BYN</div>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};
