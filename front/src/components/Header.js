function Header ({ cardsData, setCardsData }) {

    function cardsSorting () {
         setCardsData([...cardsData.sort((a, b) => { return(b - a) })]);
    }

    function cardAdding () {
        let newNumber = Math.floor(Math.random() * 1000);
        setCardsData([...cardsData, newNumber]);
    }

    return (
        <div className="header">
            <div className="button" onClick={ e => { cardAdding() } }>Add Card</div>
            <div className="button" onClick={ e => { cardsSorting() } }>Sort Cards</div>
        </div>
    );
}

export default Header;