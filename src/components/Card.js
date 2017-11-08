import React from 'react';

// show the front of the card if state is true, show back otherwise
// front or back will be passed to the card as props

const Card = (props) => {
    return (
        <div className="card">
            <h1>
                { props.showFront ? props.card.front : props.card.back }
            </h1>
        </div>
    );
}

export default Card;