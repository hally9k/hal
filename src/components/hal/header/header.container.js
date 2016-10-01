import {connect} from 'react-redux'
import {jobTitleEnters, jobTitleLeaves} from '../../../actions/header.actions'
import header from './header.component'

const mapStateToProps = (state, ownProps) => {
  return {
    state: state.header
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

const VisibleHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(header)

export default VisibleHeader
