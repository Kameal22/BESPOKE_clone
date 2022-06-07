import "./styles/cartItem.css";

interface CartItemInterface {
  fridgeName: string;
  energyClass: string;
}

const CartItem: React.FC<CartItemInterface> = (props) => {
  return (
    <div className="cartItemDiv">
      <h3>{props.fridgeName}</h3>
      <h3>{props.energyClass}</h3>
    </div>
  );
};

export default CartItem;
