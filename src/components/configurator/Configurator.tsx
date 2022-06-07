import ChooseFridge from "./ChooseFridge";
import "./styles/configurator.css";
import YourFridge from "./YourFridge";
import { Fridge } from "../../interfaces/FridgeInterface";
import ChooseColors from "./ChooseColors";
import ChooseEnergyClass from "./ChooseEnergyClass";

interface ConfiguratorProps {
  selectFridge: (fride: Fridge) => void;
  selectColor: (id: string | undefined, color: string) => void;
  highlightAFridge: (fridge: Fridge) => void;
  selectEnergyClass: (id: string | undefined, energyClass: string) => void;
  highlightedFridge: Fridge | undefined;
  chosenFridges: Fridge[];
}

const Configurator: React.FC<ConfiguratorProps> = (props) => {
  return (
    <div className="configuratorDiv">
      <h1>Krok1: Wybierz układ urządzeń i fronty</h1>

      <div className="configuratorComponents">
        <YourFridge
          highlightAFridge={props.highlightAFridge}
          highlightedFridge={props.highlightedFridge}
          selectFridge={props.selectFridge}
          chosenFridges={props.chosenFridges}
        />
        <div className="chooseFridgeAndColorDiv">
          <ChooseFridge
            chosenFridges={props.chosenFridges}
            selectFridge={props.selectFridge}
          />
          {props.chosenFridges.length < 1 ? null : (
            <ChooseColors
              highlightedFridge={props.highlightedFridge}
              selectColor={props.selectColor}
            />
          )}
        </div>
      </div>

      {props.chosenFridges.length < 1 ? null : (
        <ChooseEnergyClass
          selectEnergyClass={props.selectEnergyClass}
          productName={props.highlightedFridge?.name}
          productId={props.highlightedFridge?.id}
          productEnergyClass={props.highlightedFridge?.energyClass}
        />
      )}
    </div>
  );
};

export default Configurator;
