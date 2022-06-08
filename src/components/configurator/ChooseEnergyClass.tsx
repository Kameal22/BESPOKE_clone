import "./styles/chooseEnergyClass.css";
import { EnergyClasses } from "../../assets/EnergyClasses";

interface ChooseEnergyInterface {
  productName: string | undefined;
  productId: string | undefined;
  productEnergyClass: string | undefined;
  selectEnergyClass: (id: string | undefined, energyClass: string) => void;
}

const ChooseEnergyClass: React.FC<ChooseEnergyInterface> = (props) => {
  const handleEnergyClassChange = (
    e: React.FormEvent<HTMLSelectElement>
  ): void => {
    props.selectEnergyClass(props.productId, e.currentTarget.value);
  };

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

      <div className="energyClassDiv">
        <p>Klasa energetyczna:</p>
        <select
          value={props.productEnergyClass}
          onChange={handleEnergyClassChange}
          className="energySelect"
        >
          {EnergyClasses.map((eclass) => {
            return (
              <option key={eclass} value={eclass} className="energyOption">
                {eclass}
              </option>
            );
          })}
        </select>
        <input style={{ display: "none" }} type="submit" value="Wyślij" />
      </div>
    </div>
  );
};

export default ChooseEnergyClass;
