function Card ({ number, onDelete, index}) {
    return(
        <div className="card">
            <span className='cards-x' onClick={e=>{onDelete(number)}}>X</span>
            <div className="cards-number">{number}</div>
        </div>
    )
}

export default Card;