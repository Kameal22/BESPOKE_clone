import ChooseFridge from "./ChooseFridge";
import "./styles/configurator.css";
import YourFridge from "./YourFridge";
import { Fridge } from "../../interfaces/FridgeInterface";

interface ConfiguratorProps {
  selectFridge: (fride: Fridge) => void;
  chosenFridges: Fridge[];
}

const Configurator: React.FC<ConfiguratorProps> = (props) => {
  return (
    <div className="configuratorDiv">
      <h1>Krok1: Wybierz układ urządzeń i fronty</h1>

      <div className="configuratorComponents">
        <YourFridge chosenFridges={props.chosenFridges} />
        <ChooseFridge
          chosenFridges={props.chosenFridges}
          selectFridge={props.selectFridge}
        />
      </div>
    </div>
  );
};

export default Configurator;
