import Container from "../UI/Container";
import "./Cart.scss";
import CartPorducts from "./CartPorducts";
import CartTotalAmount from "./CartTotalAmount";

const CartLayout = () => {
  return (
    <div className="cart section-start">
      <Container>
        <div className="cart-wrapper">
          <CartPorducts />
          <CartTotalAmount />
        </div>
      </Container>
    </div>
  );
};

export default CartLayout;
