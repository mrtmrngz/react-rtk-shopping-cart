import { Link } from "react-router-dom";
import "./ProductItem.scss";
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import Button from "../UI/Button";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/cartSlice";

const ProductItem = ({product}) => {

  const {name, image, price, stock} = product
  const dispatch = useDispatch()

  const handleAddCart = () => {
    const cartProduct = {
      ...product,
      amount: 1
    }
    dispatch(cartActions.addCart(cartProduct))
    
  }

  return (
    <div className="product-item">
      <Link className="product-link">
        <div className="product-image">
          <img
            src={image}
            alt=""
          />
        </div>
        <div className="product-info">
          <div className="stock-reviews">
            <div className="stock">
              <span className={stock > 0 ? "in-stock" : "out-of-stock"}>{stock > 0 ? "In Stock" : "Out Of Stock"}</span>
            </div>
            <div className="reviews">
              <StarIcon className="review-icon" />
              <StarIcon className="review-icon" />
              <StarIcon className="review-icon" />
              <StarIcon className="review-icon" />
              <StarHalfIcon className="review-icon" />
            </div>
          </div>
          <h3 className="name">{name}</h3>
          <strong className="price">{price.toFixed(2)}₺</strong>
        </div>
      </Link>
      <div className="product-item-button">
        <Button disabled={product.stock === 0} onClick={handleAddCart} className="full">{product.stock > 0 ? "Add To Cart" : "Out Of Stock"}</Button>
      </div>
    </div>
  );
};

export default ProductItem;
