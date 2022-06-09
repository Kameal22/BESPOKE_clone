import "./styles/chooseColors.css";
import { Colors } from "../../assets/Colors";
import { Fridge } from "../../interfaces/FridgeInterface";

interface ChooseColorsProps {
  selectColor: (id: string | undefined, color: string) => void;
  highlightedFridge: Fridge | undefined;
}

const ChooseColors: React.FC<ChooseColorsProps> = (props) => {
  return (
    <div className="chooseColorsDiv">
      <h2>Wybierz materiał i kolor frontu</h2>
      <div className="colorsDiv">
        {Colors.map((color) => {
          return (
            <div
              onClick={() =>
                props.selectColor(props.highlightedFridge?.id, color.color)
              }
              key={color.name}
              className="singleDiv"
            >
              <div
                className="color"
                style={{ backgroundColor: color.color }}
              ></div>
              <p className="colorName">{color.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChooseColors;
