import "./styles/chooseEnergyClass.css";
import { EnergyClasses } from "../../assets/EnergyClasses";
import { useState } from "react";

interface ChooseEnergyInterface {
  productName: string | undefined;
  productId: string | undefined;
  productEnergyClass: string | undefined;
  selectEnergyClass: (id: string | undefined, energyClass: string) => void;
}

const ChooseEnergyClass: React.FC<ChooseEnergyInterface> = (props) => {
  const [energyClass, setEnergyClass] = useState<string>("");

  const handleEnergyClassChange = (
    e: React.FormEvent<HTMLSelectElement>
  ): void => {
    props.selectEnergyClass(props.productId, e.currentTarget.value);
  };

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  // };

  console.log(props.productEnergyClass, props.productName);

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
