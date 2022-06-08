import Configurator from "../configurator/Configurator";
import Header from "../header/Header";
import "./landingPage.css";
import { useState } from "react";
import { Fridge } from "../../interfaces/FridgeInterface";
import { v4 as uuidv4 } from "uuid";
import InteriorStyleChoice from "../interiorStyle/InteriorStyleChoice";
import Cart from "../cart/Cart";

const LandingPage: React.FC = () => {
  const [fridgeComponent, setFridgeComponent] = useState<Fridge[]>([]);

  const highlightAFridge = (id: string | undefined) => {
    fridgeComponent.forEach((fridge) => (fridge.isHighlighted = false)); // Set all fridges to non-highlighted

    const fridge = fridgeComponent.map((fridge) => {
      return fridge.id === id ? { ...fridge, isHighlighted: true } : fridge;
    });

    setFridgeComponent(fridge);
  };

  const highlightedFridge = fridgeComponent.find(
    (fridge) => fridge.isHighlighted === true
  );

  const selectFridge = (fridge: Fridge) => {
    const fridgeWithID = JSON.parse(JSON.stringify(fridge)); //Deep cloning to change an ID

    if (fridgeComponent.length < 3) {
      fridgeComponent.forEach((fridge) => (fridge.isHighlighted = false));

      fridgeWithID.id = uuidv4();
      fridgeWithID.isHighlighted = true;

      setFridgeComponent((prevState) => [...prevState, fridgeWithID]);
    }
  };

  const removeFridge = (id: string | undefined) => {
    const fridgeToRemove = fridgeComponent.findIndex(
      (fridge) => fridge.id === id
    );

    setFridgeComponent(fridgeComponent.splice(fridgeToRemove, 1));
  };

  const selectFridgeColor = (id: string | undefined, color: string) => {
    const fridge = fridgeComponent.map((fridge) => {
      return fridge.id === id ? { ...fridge, color: color } : fridge;
    });
    setFridgeComponent(fridge);
  };

  const selectEnergyClass = (id: string | undefined, energyClass: string) => {
    const fridge = fridgeComponent.map((fridge) => {
      return fridge.id === id
        ? { ...fridge, energyClass: energyClass }
        : fridge;
    });
    setFridgeComponent(fridge);
  };

  return (
    <div className="landingPageDiv">
      <Header />
      <Configurator
        removeFridge={removeFridge}
        selectEnergyClass={selectEnergyClass}
        highlightedFridge={highlightedFridge}
        highlightFridge={highlightAFridge}
        selectColor={selectFridgeColor}
        chosenFridges={fridgeComponent}
        selectFridge={selectFridge}
      />
      <InteriorStyleChoice />
      <Cart
        highlightedFridge={highlightedFridge}
        selectEnergyClass={selectEnergyClass}
        chosenFridge={fridgeComponent}
      />
    </div>
  );
};

export default LandingPage;
