import "./styles/cartItem.css";
import { EnergyClasses } from "../../assets/EnergyClasses";

interface CartItemInterface {
  fridgeName: string;
  fridgeEnergyClass: string;
  fridgeId: string;
  fridgePrice: number;
  selectEnergyClass: (id: string | undefined, energyClass: string) => void;
}

const CartItem: React.FC<CartItemInterface> = (props) => {
  const handleEnergyClassChange = (
    e: React.FormEvent<HTMLSelectElement>
  ): void => {
    props.selectEnergyClass(props.fridgeId, e.currentTarget.value);
  };

  return (
    <div className="cartItemDiv">
      <h3>{props.fridgeName}</h3>
      <h3>Klasa energetyczna: {props.fridgeEnergyClass}</h3>
      <select
        value={props.fridgeEnergyClass}
        onChange={handleEnergyClassChange}
        className="energySelect"
      >
        {EnergyClasses.map((eclass) => {
          return (
            <option key={eclass} value={eclass} className="energyOption">
              {eclass}
            </option>
          );
        })}
      </select>
      <div className="qtyAndPrice">
        <h3>1 szt.</h3>
        <h3>{props.fridgePrice} zł</h3>
      </div>
    </div>
  );
};

export default CartItem;
