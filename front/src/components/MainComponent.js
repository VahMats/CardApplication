import Card from "./Card";

function MainComponent ({ cardsData, setCardsData }) {

    function onDelete ( number ) {
        cardsData.splice(cardsData.indexOf(number), 1);
        setCardsData([...cardsData]);
    }

    return (
        <div className="main">
            { cardsData.length ? cardsData.map((cardsNumber, index) => {
                return (
                    <Card number={ cardsNumber } key={ index } onDelete={ onDelete }/>
                )
            }) : <h1>Try to Add a Card</h1> }
        </div>
    );
}

export default MainComponent;