import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './slider.module.css'
import './Slider.css'
export const MySlider = () => {
  const slides = [
    {
      id: 1,
      image: 0
    },
    {
      id: 2,
      image: 0
    },
    {
      id: 3,
      image: 0
    },
  ];
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
      {slides.map((slide) => {
        return (
          <div className="item" key={slide.id}>
            <div
              className={styles.itemImage}
              style={{
                width: "100%",
                backgroundImage: "url(" + slide.image + ")",
                backgroundSize: "cover",
              }}
            >
              <img className={styles.image}/>
              <div className={styles.desc}>
                <p className={styles.title}>game Name</p>
                <div className={styles.preview}>
                  <img className={styles.previmg}/>
                  <img className={styles.previmg}/>
                  <img className={styles.previmg}/>
                  <img className={styles.previmg}/>
                </div>
                <div className={styles.price}>100 BYN</div>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};
