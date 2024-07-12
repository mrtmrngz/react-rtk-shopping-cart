import { SwiperSlide } from "swiper/react";
import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";

const checkQuantity = (productData) => {
  if(productData.length === 0) {
    return <p className="empyt-list-warning">There is no products...</p>;
  }else {
    return (
      <>
          {productData.map((product, index) => (
            <SwiperSlide key={index}>
              <ProductItem product={product} />
            </SwiperSlide>
          ))}
      </>
    )
  }
}


export const renderProducts = (listing, products) => {

  const bestSellings = products.filter(item => item.stock > 0 && item.bestSellings)
  const newArrivals = products.filter(item => item.stock > 0 && item.newArrivals)
  const tv = products.filter(item => item.stock > 0 && item.subCategory === "Televizyon")

  switch (listing) {
    case "bestSellings":
      return checkQuantity(bestSellings)
    case "newArrivals":
      return checkQuantity(newArrivals)
    case "tv": 
      return checkQuantity(tv)
    default:
      return <p className="empyt-list-warning">There is no products...</p>;
  }
};
