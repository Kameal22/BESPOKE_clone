import CartSummary from "./CartSummary";
import "./styles/cart.css";
import { Fridge } from "../../interfaces/FridgeInterface";
import CartItem from "./CartItem";

interface CartProps {
  chosenFridge: Fridge[];
  highlightedFridge: Fridge | undefined;
  selectEnergyClass: (id: string | undefined, energyClass: string) => void;
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
                selectEnergyClass={props.selectEnergyClass}
                key={fridge.id}
                fridgeId={fridge.id}
                fridgeName={fridge.name}
                fridgeEnergyClass={fridge.energyClass}
                fridgePrice={fridge.price}
              />
            );
          })
        : null}
      <CartSummary chosenFridge={props.chosenFridge} />
    </div>
  );
};

export default Cart;
