import "./styles/chooseColors.css";
import { Colors } from "../../assets/Colors";

const ChooseColors: React.FC = () => {
    return (
        <div className="chooseColorsDiv"><h2>Wybierz materiał i kolor frontu</h2>
            <h3>Some colors example</h3>
            <div className="colorsDiv">{Colors.map((color) => {
                return (<div key={color.name} className="singleDiv"><div className="color" style={{ backgroundColor: color.color }}></div><p className="colorName">{color.name}</p></div>)
            })}</div>
        </div>
    )
}

export default ChooseColors