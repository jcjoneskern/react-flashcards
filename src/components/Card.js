import React from 'react';

// show the front of the card if state is true, show back otherwise
// front or back will be passed to the card as props

const Card = (props) => {
    return (
        <div className="card">
            { props.showFront ?
            <h1>{ props.card.front }</h1> :
            <h1>{ props.card.back }</h1>  
            }
        </div>
    );
}

export default Card;