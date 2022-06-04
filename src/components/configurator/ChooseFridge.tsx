import "./styles/chooseFridge.css";
import { Fridges } from "../../assets/Fridges";
import { Fridge } from "../../interfaces/FridgeInterface";

interface ChooseFridgeProps {
  selectFridge: (fride: Fridge) => void;
  chosenFridges: Fridge[];
}

const ChooseFridge: React.FC<ChooseFridgeProps> = (props) => {
  return (
    <div className="chooseFridgeDiv">
      <h2>WYBIERZ TYP LODÓWKI</h2>

      <div className="fridgesChoice">
        {Fridges.map((fridge) => {
          return (
            <div
              onClick={() => props.selectFridge(fridge)}
              key={fridge.name}
              className="wholeFridge"
            >
              <div
                style={{ width: fridge.width, height: fridge.height }}
                className="fridgeImg"
              >
                <i style={{ fontSize: "1.4em" }} className="bi bi-plus-lg"></i>
              </div>
              <p className="fridgeName">{fridge.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChooseFridge;
