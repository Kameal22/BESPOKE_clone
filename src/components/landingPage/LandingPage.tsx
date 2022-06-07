import Configurator from "../configurator/Configurator";
import Header from "../header/Header";
import "./landingPage.css";
import { useState } from "react";
import { Fridge } from "../../interfaces/FridgeInterface";
import { v4 as uuidv4 } from "uuid";
import InteriorStyleChoice from "../interiorStyle/InteriorStyleChoice";
import Cart from "../cart/Cart";

const LandingPage: React.FC = () => {
  const [chosenFridge, setChosenFridge] = useState<Fridge[]>([]);
  const [highlightedFridge, setHighlightedFridge] = useState<Fridge>();

  const highlightAFridge = (fridge: Fridge) => {
    setHighlightedFridge(fridge);
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

  const selectEnergyClass = (id: string | undefined, energyClass: string) => {
    const fridge = chosenFridge.map((fridge) => {
      return fridge.id === id
        ? { ...fridge, energyClass: energyClass }
        : fridge;
    });
    const tmpHighligthed = highlightedFridge

    if (tmpHighligthed) {
      tmpHighligthed.energyClass = energyClass
    }
    setHighlightedFridge(tmpHighligthed)
    setChosenFridge(fridge);
  };

  return (
    <div className="landingPageDiv">
      <Header />
      <Configurator
        selectEnergyClass={selectEnergyClass}
        highlightedFridge={highlightedFridge}
        highlightAFridge={highlightAFridge}
        selectColor={selectFridgeColor}
        chosenFridges={chosenFridge}
        selectFridge={selectFridge}
      />
      <InteriorStyleChoice />
      <Cart chosenFridge={chosenFridge} />
    </div>
  );
};

export default LandingPage;
