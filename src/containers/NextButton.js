import { connect } from 'react-redux';

import Button from '../components/Button';
import { nextCard } from '../actions';
import { disableNext } from '../reducers';

const mapStateToProps = (state) => {
    return {
        text: "next",
        disabled: disableNext(state)
    }
};

const mapActionsToProps = {
    action: nextCard
};

export default connect(mapStateToProps, mapActionsToProps)(Button);