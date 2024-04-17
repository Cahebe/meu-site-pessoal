import "./styles.css";
import UnderConstruction from "../../assets/img/OE60SA0.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProjectCard() {
  const settings = {
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    variableWidth: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="msp-project-card-container">
          <h1>1</h1>
          <img src={UnderConstruction} alt="Under Construction" />
        </div>
        <div className="msp-project-card-container">
          <h1>2</h1>
          <img src={UnderConstruction} alt="Under Construction" />
        </div>
        <div className="msp-project-card-container">
          <h1>3</h1>
          <img src={UnderConstruction} alt="Under Construction" />
        </div>
        <div className="msp-project-card-container">
          <h1>4</h1>
          <img src={UnderConstruction} alt="Under Construction" />
        </div>
      </Slider>
    </div>
  );
}
