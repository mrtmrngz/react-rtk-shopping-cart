import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import './SliderButtons.scss'
import { useSwiper } from "swiper/react";

const SliderButtons = ({onNext, onPrev}) => {

  const swiper = useSwiper()


  return (
    <div className="slider-buttons">
      <button className="slider-button prev" onClick={onPrev}>
        <ArrowLeftIcon className="slider-navigate-icon" />
      </button>
      <button className="slider-button next" onClick={onNext}>
        <ArrowRightIcon className="slider-navigate-icon" />
      </button>
    </div>
  );
};

export default SliderButtons;
