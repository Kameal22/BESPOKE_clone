import Configurator from "../configurator/Configurator";
import Header from "../header/Header";
import "./landingPage.css";
import { useState } from "react";
import { Fridge } from "../../interfaces/FridgeInterface";
import { v4 as uuidv4 } from "uuid";

const LandingPage: React.FC = () => {
  const [chosenFridge, setChosenFridge] = useState<Fridge[]>([]);
  const [highlightedFridge, setHighlightedFridge] = useState<Fridge>()

  const highlightAFridge = (fridge: Fridge) => {
    setHighlightedFridge(fridge)
  }

  const addFridge = (fridge: Fridge) => {
    const fridgeWithID = JSON.parse(JSON.stringify(fridge))

    fridgeWithID.id = uuidv4()
    if (chosenFridge.length < 3) {
      setChosenFridge(prevState => [...prevState, fridgeWithID]);
      setHighlightedFridge(fridgeWithID)
    }
  };

  const selectFridgeColor = (id: string | undefined, color: string) => {
    const fridge = chosenFridge.map((fridge) => {
      return (
        fridge.id === id ? { ...fridge, color: color } : fridge
      )
    })
    setChosenFridge(fridge)
  }

  return (
    <div className="landingPageDiv">
      <Header />
      <Configurator highlightedFridge={highlightedFridge} highlightAFridge={highlightAFridge} selectColor={selectFridgeColor} chosenFridges={chosenFridge} selectFridge={addFridge} />
    </div>
  );
};

export default LandingPage;
