import {connect} from 'react-redux'
import {rotate} from '../../actions/logos.actions'
import logos from './logos.component'

const mapStateToProps = (state, ownProps) => {
  return {
    logos: state.logos
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(rotate())
    }
  }
}

const VisibleLogos = connect(
  mapStateToProps,
  mapDispatchToProps
)(logos)

export default VisibleLogos
