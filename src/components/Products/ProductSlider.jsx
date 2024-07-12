import Container from "../UI/Container";
import SectionTitle from "../UI/SectionTitle";
import "./Products.scss";
import { Swiper } from "swiper/react";
import { renderProducts } from "./RenderProducts";
import "swiper/css";
import '../UI/SliderButton/SliderButtons.scss'
import { useRef } from "react";
import SliderButtons from "../UI/SliderButton/SliderButtons";
import { useSelector } from "react-redux";

const ProductSlider = ({ listing, sectionTitle }) => {

  const products = useSelector(state => state.cart.products)

  const swiperRef = useRef(null)

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  //! get and send products
  const renderedProducts = renderProducts(listing, products)
  const renderIsArray = Array.isArray(renderedProducts.props.children)

  return (
    <div className="products products-slider section-start">
      <SectionTitle>{sectionTitle}</SectionTitle>
      <Container>
        <div className="products-wrapper">
          <div className="product-list">
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              grabCursor={true}
              ref={swiperRef}
              breakpoints={{
                640: {
                  slidesPerView: 2
                },
                850: {
                  slidesPerView: 3
                },
                1024: {
                  slidesPerView: 4
                }
              }}
            >
              {renderedProducts}
            </Swiper>
          </div>
        </div>
      </Container>

      {renderIsArray && renderedProducts.props.children.length > 4 && <SliderButtons onNext={handleNext} onPrev={handlePrev} />}
      
    </div>
  );
};

export default ProductSlider;
