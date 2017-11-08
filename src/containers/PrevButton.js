import { connect } from 'react-redux';

import Button from '../components/Button';
import { prevCard } from '../actions';
import { disablePrev } from '../reducers';

const mapStateToProps = (state) => {
    return {
        text: "back",
        disabled: disablePrev(state)
    }
};

const mapActionsToProps = {
    action: prevCard
};

export default connect(mapStateToProps, mapActionsToProps)(Button);