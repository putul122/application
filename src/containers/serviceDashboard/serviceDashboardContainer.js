import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'
import ServiceDashboard from '../../components/serviceDashboard/serviceDashboardComponent'
import { actions as sagaActions } from '../../redux/sagas/'
import { actionCreators as basicActionCreators } from '../../redux/reducers/basicReducer/basicReducerReducer'

// Global State
export function mapStateToProps (state, props) {
  return {
    authenticateUser: state.basicReducer.authenticateUser,
    showToasterSuccess: state.basicReducer.showToasterSuccess,
    packages: state.basicReducer.packages
  }
}
// In Object form, each funciton is automatically wrapped in a dispatch
export const propsMapping: Callbacks = {
  fetchUserAuthentication: sagaActions.basicActions.fetchUserAuthentication,
  fetchPackage: sagaActions.basicActions.fetchPackage,
  setBreadcrumb: basicActionCreators.setBreadcrumb,
  setToasterSuccessStatus: basicActionCreators.setToasterSuccessStatus
}

// If you want to use the function mapping
// export const propsMapping = (dispatch, ownProps) => {
//   return {
//     onClick: () => dispatch(actions.starsActions.FETCH_STARS)
//   }
// }

export default compose(
  connect(mapStateToProps, propsMapping),
  lifecycle({
    componentWillMount: function () {
      this.props.fetchUserAuthentication && this.props.fetchUserAuthentication()
      this.props.fetchPackage && this.props.fetchPackage()
      let breadcrumb = {
        title: 'Home',
        items: [
          {
            name: 'Home',
            href: '/home',
            separator: false
          }
        ]
      }
      this.props.setBreadcrumb && this.props.setBreadcrumb(breadcrumb)
    },
    componentDidMount: function () {},
    componentWillReceiveProps: function (nextProps) {
      console.log('component will receive props', nextProps)
      if (nextProps.authenticateUser && nextProps.authenticateUser.resources) {
        if (!nextProps.authenticateUser.resources[0].result) {
          this.props.history.push('/')
        }
      }
      if (nextProps.packages && nextProps.packages !== this.props.packages) {
        localStorage.setItem('packages', JSON.stringify(nextProps.packages))
      }
    }
  })
)(ServiceDashboard)
