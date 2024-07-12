import { useSelector } from "react-redux";
import ProductSlider from "../components/Products/ProductSlider.jsx";

const Home = () => {



  return (
    <>
      <ProductSlider listing={"bestSellings"} sectionTitle={"Best Sellings"} />
      <ProductSlider listing={"newArrivals"} sectionTitle={"New Arrivals"} />
      <ProductSlider listing={"tv"} sectionTitle={"TV"} />
      <ProductSlider listing={"emtyList"} sectionTitle={"Empty List"} />
    </>
  );
};

export default Home;
