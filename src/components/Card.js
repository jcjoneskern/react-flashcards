import React from 'react';

// show the front of the card if state is true, show back otherwise
// front or back will be passed to the card as props

const Card = (props) => {
    return <div className="card">
        { props.showFront ?
          <p>{ props.card.front }</p> :
          <p>{ props.card.back }</p>  
        }
    </div>
}

export default Card;