import {connect} from 'react-redux'
import {greenJobTitleEnters, greenJobTitleLeaves, blueJobTitleEnters, blueJobTitleLeaves} from '../../../actions/header.actions'
import header from './header.component'

const mapStateToProps = (state, ownProps) => {
  return {
    state: state.header
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    greenJobTitleEnters: () => {
      dispatch(greenJobTitleEnters())
    },
    greenJobTitleLeaves: () => {
      dispatch(greenJobTitleLeaves())
    },
    blueJobTitleEnters: () => {
      dispatch(blueJobTitleEnters())
    },
    blueJobTitleLeaves: () => {
      dispatch(blueJobTitleLeaves())
    },
  }
}

const VisibleHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(header)

export default VisibleHeader
