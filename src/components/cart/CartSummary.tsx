import "./styles/cartSummary.css";

const CartSummary: React.FC = () => {
  return (
    <div className="cartSummaryDiv">
      <div className="cartSummaryHeading">
        <h3>Całkowity koszt zestawu</h3>
        <h2>0 zł</h2>
      </div>

      <div className="buttonDiv">
        <button className="addToCart">DODAJ DO KOSZYKA</button>
      </div>
    </div>
  );
};

export default CartSummary;
