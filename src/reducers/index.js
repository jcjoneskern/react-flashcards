import cards from '../cards';

const INITIAL_STATE = {
    cards,
    currentIndex: 0,
    showFront: true
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "NEXT_CARD":
            disableNext(state);
            return Object.assign({}, state, {
                currentIndex: state.currentIndex + 1,
                showFront: true
            });
        case "PREV_CARD":
            disablePrev(state);
            return Object.assign({}, state, {
                currentIndex: state.currentIndex - 1,
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

// shuffle array of cards
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

// test if you can go back
function disablePrev(state) {
    if (state.currentIndex <= 0) {
        return true
    } else {
        return false;
    }
}

// test if you can go forward
function disableNext(state) {
    if (state.currentIndex >= (state.cards.length - 1)) {
        return true;
    } else {
        return false;
    }
}


export { reducer as default, disablePrev, disableNext } ;