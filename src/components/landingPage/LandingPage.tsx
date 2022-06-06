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
  const [energyClass, setEnergyClass] = useState<string>("");

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

  const selectEnergyClass = (energyClass: string) => {
    setEnergyClass(energyClass);
  };

  console.log(energyClass);
  return (
    <div className="landingPageDiv">
      <Header />
      <Configurator
        energyClass={energyClass}
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
