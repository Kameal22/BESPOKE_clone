import "./styles/chooseEnergyClass.css";
import { EnergyClasses } from "../../assets/EnergyClasses";

interface ChooseEnergyInterface {
  productName: string | undefined;
}

const ChooseEnergyClass: React.FC<ChooseEnergyInterface> = (props) => {
  return (
    <div className="chooseEnergyClassDiv">
      <div className="energyInfo">
        <p className="energyProductName">{props.productName}</p>
        <p>
          Pojemność: <span>999 l</span>
        </p>
        <p>
          Wymiary (Wys. x Szer. x Gł.): <span>999 x 99 x 9 mm</span>
        </p>
      </div>

      <div className="energyClass">
        <p>Klasa energetyczna:</p>
        <select className="energySelect">
          {EnergyClasses.map((eclass) => {
            return <option className="energyOption">{eclass}</option>;
          })}
        </select>
      </div>
    </div>
  );
};

export default ChooseEnergyClass;
