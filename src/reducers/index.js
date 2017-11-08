import cards from '../cards';

const INITIAL_STATE = {
    cards,
    currentIndex: 0,
    showFront: true
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "NEXT_CARD":
            return Object.assign({}, state, {
                currentIndex: state.currentIndex++,
                showFront: true
            });
        case "PREV_CARD":
            return Object.assign({}, state, {
                currentIndex: state.currentIndex--,
                showFront: true
            });
        case "FLIP_CARD":
            return Object.assign({}, state, {
                showFront: !state.showFront
            });
        case "SHUFFLE_CARDS":
            return Object.assign({}, state, {
                cards: shuffle(state.cards.slice()),
                currentIndex: 0,
                showFront: true
            });
        default:
            return state;
    }
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}


export default reducer;