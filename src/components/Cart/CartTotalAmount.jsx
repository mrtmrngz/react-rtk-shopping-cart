import { useDispatch, useSelector } from "react-redux";
import Button from "../UI/Button";
import "./Cart.scss";
import { cartActions } from "../../redux/cartSlice";

const CartTotalAmount = () => {

  const cartItems = useSelector(state => state.cart.cartItems)
  const dispatch = useDispatch()

  const totalAmount = cartItems.reduce((accu, curr) => {
    return accu + (curr.price * curr.amount)
  }, 0)

  return (
    <div className="cart-total-amount">
      <div className="total-info">
        <h3>Total Amount: </h3>
        <span>{totalAmount}₺</span>
      </div>
      <div className="clear-all-btn">
        <Button onClick={() => dispatch(cartActions.deleteAll())} className="clear-all-btn">Clear All</Button>
      </div>
    </div>
  );
};

export default CartTotalAmount;
