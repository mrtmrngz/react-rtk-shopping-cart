import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../redux/cartSlice";

const TableBody = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleDeleteItem = (cartItemId) => {
    dispatch(cartActions.deleteItem(cartItemId))
  };

  return (
    <tbody className="table-body">
      {cartItems.length > 0 &&
        cartItems.map((cartItem, index) => (
          <tr className="table-row" key={index}>
            <td className="tb-img">
              <img src={cartItem.image} alt="" />
            </td>
            <td className="tb-name">
              <strong>{cartItem.name}</strong>
            </td>
            <td className="tb-price">{cartItem.price}₺</td>
            <td className="tb-amount">{cartItem.amount}</td>
            <td className="tb-totalAmount">
              {cartItem.price * cartItem.amount}₺
            </td>
            <td className="tb-delete">
              <button
                className="table-product-delete"
                onClick={() =>handleDeleteItem(cartItem.id)}
              >
                <i className="bi bi-x-circle"></i>
              </button>
            </td>
          </tr>
        ))}
    </tbody>
  );
};

export default TableBody;
