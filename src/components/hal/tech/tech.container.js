import {connect} from 'react-redux';
import {rotate} from '../../../actions/tech.actions';
import {withRouter} from 'react-router';
import tech from './tech.component';

const mapStateToProps = (state, ownProps) => {
  return {
    state: state.tech
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(rotate())
    }
  }
};

const VisibleLogos = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(tech));

export default VisibleLogos;
