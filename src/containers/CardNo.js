import CardNo from '../components/CardNo';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        number: state.currentIndex + 1,
        total: state.cards.length
    }
}

export default connect(mapStateToProps)(CardNo);