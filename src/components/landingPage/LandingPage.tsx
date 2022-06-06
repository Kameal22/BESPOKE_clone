import Configurator from "../configurator/Configurator";
import Header from "../header/Header";
import "./landingPage.css";
import { useState } from "react";
import { Fridge } from "../../interfaces/FridgeInterface";
import { v4 as uuidv4 } from "uuid";
import InteriorStyleChoice from "../interiorStyle/InteriorStyleChoice";
import Cart from "../cart/Cart";
import { CartProductInterface } from "../../interfaces/CartInterface";

const LandingPage: React.FC = () => {
  const [chosenFridge, setChosenFridge] = useState<Fridge[]>([]);
  const [highlightedFridge, setHighlightedFridge] = useState<Fridge>();
  const [cart, setCart] = useState<CartProductInterface[]>([]);

  const highlightAFridge = (fridge: Fridge) => {
    setHighlightedFridge(fridge);
  };

  const addToCart = (cart: CartProductInterface) => {
    setCart((prevState) => [...prevState, cart]);
  };

  const selectFridge = (fridge: Fridge) => {
    const fridgeWithID = JSON.parse(JSON.stringify(fridge));

    fridgeWithID.id = uuidv4();
    if (chosenFridge.length < 3) {
      setChosenFridge((prevState) => [...prevState, fridgeWithID]);
      setHighlightedFridge(fridgeWithID);
    }
  };

  const selectFridgeColor = (id: string | undefined, color: string) => {
    const fridge = chosenFridge.map((fridge) => {
      return fridge.id === id ? { ...fridge, color: color } : fridge;
    });
    setChosenFridge(fridge);
  };

  return (
    <div className="landingPageDiv">
      <Header />
      <Configurator
        highlightedFridge={highlightedFridge}
        highlightAFridge={highlightAFridge}
        selectColor={selectFridgeColor}
        chosenFridges={chosenFridge}
        selectFridge={selectFridge}
      />
      <InteriorStyleChoice />
      <Cart addToCart={addToCart} cart={cart} />
    </div>
  );
};

export default LandingPage;
