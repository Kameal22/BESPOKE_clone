import "./styles/yourFridge.css";
import { Fridge } from "../../interfaces/FridgeInterface";
import { Fridges } from "../../assets/Fridges";

interface YourFridgeProps {
  chosenFridges: Fridge[];
  selectFridge: (fride: Fridge) => void;
  highlightedFridge: Fridge | undefined;
  highlightFridge: (id: string | undefined) => void;
  removeFridge: (id: string | undefined) => void;
}

const YourFridge: React.FC<YourFridgeProps> = (props) => {
  const defaultFridge = Fridges[0];

  return (
    <div className="yourFridgeDiv">
      <h2>TWOJA LODÓWKA BESPOKE</h2>

      <div className="yourFridge">
        {props.chosenFridges.length < 3 ? (
          <div
            onClick={() => props.selectFridge(defaultFridge)}
            className="fridgeAdder"
          >
            <i style={{ fontSize: "4em" }} className="bi bi-plus-lg"></i>
          </div>
        ) : null}
        {props.chosenFridges.map((fridge) => {
          return (
            <div
              key={fridge.id}
              onClick={() => props.highlightFridge(fridge.id)}
              style={{
                width: fridge.width * 2,
                height: fridge.height * 3,
                backgroundColor: fridge.color,
                boxShadow: fridge.isHighlighted
                  ? "rgb(65 194 233) 1px 1px 15px"
                  : "none",
              }}
              className="fridge"
            >
              <i
                onClick={() => props.removeFridge(fridge.id)}
                style={{ fontSize: "2.5em" }}
                id="removeFridge"
                className="bi bi-file-x"
              ></i>
              <i style={{ fontSize: "4em" }} className="bi bi-plus-lg"></i>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default YourFridge;
