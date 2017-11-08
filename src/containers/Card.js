import Card from '../components/Card';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        card: state.cards[state.currentIndex],
        showFront: state.showFront
    }
}

export default connect(mapStateToProps)(Card);