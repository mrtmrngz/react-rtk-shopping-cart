import { useSelector } from "react-redux";
import Container from "../UI/Container";
import SectionTitle from "../UI/SectionTitle";
import ProductItem from "./ProductItem";
import './Products.scss'

const ProductList = () => {

  const products = useSelector(state => state.cart.products)

  return (
    <div className="products products-grid section-start">
      <SectionTitle>Products</SectionTitle>
      <Container>
        <div className="products-wrapper">
          <div className="product-list">
            {products.map((product, index) => (
              <ProductItem key={index} product={product} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductList;
