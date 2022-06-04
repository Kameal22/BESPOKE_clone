import "./styles/yourFridge.css";
import { Fridge } from "../../interfaces/FridgeInterface";

interface YourFridgeProps {
  chosenFridges: Fridge[];
}

const YourFridge: React.FC<YourFridgeProps> = (props) => {
  return (
    <div className="yourFridgeDiv">
      <h2>TWOJA LODÓWKA BESPOKE</h2>

      <div className="yourFridge">
        {props.chosenFridges.map((fridge) => {
          return (
            <div
              style={{
                width: fridge.width * 2,
                height: fridge.height * 3,
                backgroundColor: fridge.color,
              }}
              className="fridge"
            >
              <i style={{ fontSize: "4em" }} className="bi bi-plus-lg"></i>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default YourFridge;
