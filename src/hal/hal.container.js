import {connect} from 'react-redux'
import {jobTitleEnters, jobTitleLeaves} from '../actions/hal.actions'
import hal from './hal.component'

const mapStateToProps = (state, ownProps) => {
  return {
    hal: state.hal
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    jobTitleEnters: () => {
      dispatch(jobTitleEnters())
    },
    jobTitleLeaves: () => {
      dispatch(jobTitleLeaves())
    },
  }
}

const VisibleHal = connect(
  mapStateToProps,
  mapDispatchToProps
)(hal)

export default VisibleHal
