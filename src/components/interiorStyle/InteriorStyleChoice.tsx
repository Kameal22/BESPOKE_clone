import "./styles/interiorStyleChoice.css";

const InteriorStyleChoice: React.FC = () => {
    return (
        <div className="interiorStyleChoiceDiv">
            <h1>Krok 2. Wybierz styl aranżacji wnętrza</h1>

            <div className="interiorChoiceImages">
                <div className="interior"></div>
                <div className="interiorChoice"></div>
            </div>
        </div>
    )
}

export default InteriorStyleChoice