import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import footer from './footer.component';

const mapStateToProps = (state, ownProps) => {
  return {
    state: state
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
};

const VisibleFooter = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(footer));

export default VisibleFooter;
