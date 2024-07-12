import "./Cart.scss";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

const CartPorducts = () => {


  return (
    <div className="cart-table">
      <table>
        <TableHeader />
        <TableBody />
      </table>
    </div>
  );
};

export default CartPorducts;
