import {connect} from 'react-redux'
import hal from './hal.component'

const mapStateToProps = (state, ownProps) => {
  return {
    state: state
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

const VisibleHal = connect(
  mapStateToProps,
  mapDispatchToProps
)(hal)

export default VisibleHal
