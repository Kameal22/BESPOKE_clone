import "./styles/interiorStyleChoice.css";
import loft from "../../imgs/loft.png";
import minimalistyczny from "../../imgs/minimalistyczny.png";
import nowoczesny from "../../imgs/nowoczesny.png";
import skandynawski from "../../imgs/skandynawski.png";
import { useState } from "react";

const InteriorStyleChoice: React.FC = () => {
  const [shownImage, setShownImage] = useState<string>(loft);

  const images = [
    { img: loft, name: "loft" },
    { img: minimalistyczny, name: "minimalistyczny" },
    { img: nowoczesny, name: "nowoczesny" },
    { img: skandynawski, name: "skandynawski" },
  ];

  return (
    <div className="interiorStyleChoiceDiv">
      <h1>Krok 2. Wybierz styl aranżacji wnętrza</h1>

      <div className="interiorChoiceImages">
        <div className="interior">
          <img src={shownImage} />
        </div>
        <div className="interiorChoice">
          {images.map((img) => {
            return (
              <div
                key={img.name}
                onClick={() => setShownImage(img.img)}
                className="imgDiv"
              >
                <img src={img.img} />
                <p className="interiorDescription">{img.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InteriorStyleChoice;
