import "./header.css";

const Header: React.FC = () => {
    return (
        <div className="headerDiv">
            <div className="upperHeader">
                <h1>LODÓWKI BESPOKE</h1>
                <button>Skomponuj lodówkę</button>
            </div>

            <div style={{ backgroundImage: `url("https://www.mediaexpert.pl/lp/promocje/samsung-bespoke-konfigurator-lodowek/static/media/top2.jpg?03")` }} className="lowerHeader">

                <div className="lowerHeaderTextDiv">
                    <h2>Stwórz swoją lodówkę BESPOKE</h2>
                    <h3>Skompletuj swój zestaw w 3 prostych krokach, dowolnie łączac moduły lodówki i warianty wykończenia i skorzystaj z promocji.</h3>
                    <button>Stwórz zestaw</button>
                </div>
            </div>
        </div>
    )
}

export default Header;