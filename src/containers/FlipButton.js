import { connect } from 'react-redux';

import Button from '../components/Button';
import { flipCard } from '../actions';

const mapStateToProps = (state) => {
    return {
     text: "flip card",
     disabled: false   
    }
};

const mapActionsToProps = {
    action: flipCard
};

export default connect(mapStateToProps, mapActionsToProps)(Button);