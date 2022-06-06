import CartSummary from "./CartSummary";
import "./styles/cart.css";

const Cart: React.FC = () => {
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

      <CartSummary />
    </div>
  );
};

export default Cart;
