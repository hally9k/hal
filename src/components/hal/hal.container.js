import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import hal from './hal.component';

const mapStateToProps = (state, ownProps) => {
  return {
    state: state
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
};

const VisibleHal = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(hal));

export default VisibleHal;
