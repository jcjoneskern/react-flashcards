import { connect } from 'react-redux';

import Button from '../components/Button';
import { shuffleCards } from '../actions';

const mapStateToProps = (state) => {
    return {
        text: "shuffle deck",
        disabled: false
    }
};

const mapActionsToProps = {
    action: shuffleCards
};

export default connect(mapStateToProps, mapActionsToProps)(Button);