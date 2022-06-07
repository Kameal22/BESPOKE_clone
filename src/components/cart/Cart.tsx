import CartSummary from "./CartSummary";
import "./styles/cart.css";
import { Fridge } from "../../interfaces/FridgeInterface";
import CartItem from "./CartItem";

interface CartProps {
  chosenFridge: Fridge[];
}

const Cart: React.FC<CartProps> = (props) => {
  return (
    <div className="cartDiv">
      <h1>Krok 3. Wybierz klasę energetyczną i zamów</h1>

      <div className="cartInfo">
        <h2>Twoj zestaw</h2>

        <p>
          Po dodaniu produktów do koszyka wyświetlą się informacje o
          ewentualnych promocjach, sposobach finansowania oraz kosztach usług
          wniesienia i montażu lodówki BESPOKE.
        </p>
      </div>

      {props.chosenFridge.length > 0
        ? props.chosenFridge.map((fridge) => {
            return (
              <CartItem
                key={fridge.id}
                fridgeName={fridge.name}
                energyClass={fridge.energyClass}
              />
            );
          })
        : null}
      <CartSummary />
    </div>
  );
};

export default Cart;
