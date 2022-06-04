import Configurator from "../configurator/Configurator";
import Header from "../header/Header";
import "./landingPage.css";
import { useState } from "react";
import { Fridge } from "../../interfaces/FridgeInterface";

const LandingPage: React.FC = () => {
  const [chosenFridge, setChosenFridge] = useState<Fridge[]>([]);

  const addFridge = (fridge: Fridge) => {
    if (chosenFridge.length < 3) {
      setChosenFridge((prevState) => [...prevState, fridge]);
    }
  };

  return (
    <div className="landingPageDiv">
      <Header />
      <Configurator chosenFridges={chosenFridge} selectFridge={addFridge} />
    </div>
  );
};

export default LandingPage;
