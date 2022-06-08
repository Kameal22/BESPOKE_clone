import "./styles/cartSummary.css";
import { Fridge } from "../../interfaces/FridgeInterface";
import { useEffect } from "react";

interface CartSummaryProps {
  chosenFridge: Fridge[];
}

const CartSummary: React.FC<CartSummaryProps> = (props) => {
  const summarizeCartPrice = () => {
    let finalValue = 0;

    props.chosenFridge.forEach((value) => {
      finalValue += value.price;
    });

    return finalValue;
  };

  useEffect(() => {
    summarizeCartPrice();
  }, [props.chosenFridge]);

  return (
    <div className="cartSummaryDiv">
      <div className="cartSummaryHeading">
        <h3>Całkowity koszt zestawu</h3>
        <h2>{summarizeCartPrice()}</h2>
      </div>

      <div className="buttonDiv">
        <button
          style={
            props.chosenFridge.length === 0
              ? { backgroundColor: "gray", cursor: "not-allowed" }
              : { backgroundColor: "black", cursor: "pointer" }
          }
          className="addToCart"
        >
          DODAJ DO KOSZYKA
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
