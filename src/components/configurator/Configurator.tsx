import ChooseFridge from "./ChooseFridge";
import "./styles/configurator.css";
import YourFridge from "./YourFridge";
import { Fridge } from "../../interfaces/FridgeInterface";
import ChooseColors from "./ChooseColors";

interface ConfiguratorProps {
  selectFridge: (fride: Fridge) => void;
  chosenFridges: Fridge[];
}

const Configurator: React.FC<ConfiguratorProps> = (props) => {
  return (
    <div className="configuratorDiv">
      <h1>Krok1: Wybierz układ urządzeń i fronty</h1>

      <div className="configuratorComponents">
        <YourFridge selectFridge={props.selectFridge} chosenFridges={props.chosenFridges} />
        <div className="chooseFridgeAndColorDiv">
          <ChooseFridge
            chosenFridges={props.chosenFridges}
            selectFridge={props.selectFridge}
          />
          {props.chosenFridges.length < 1 ? null : <ChooseColors />}
        </div>
      </div>
    </div>
  );
};

export default Configurator;
