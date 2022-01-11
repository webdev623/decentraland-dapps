import { connect } from 'react-redux'
import {
  isConnected,
  isConnecting,
  getAddress,
  getMana,
  getChainId
} from '../../modules/wallet/selectors'
import { isEnabled } from '../../modules/translation/selectors'
import { RootDispatch } from '../../types'
import { NavbarProps, MapStateProps, MapDispatchProps } from './Navbar.types'
import Navbar from './Navbar'

const mapState = (state: any): MapStateProps => ({
  chainId: getChainId(state),
  mana: getMana(state),
  address: getAddress(state),
  isConnected: isConnected(state),
  isConnecting: isConnecting(state),
  hasTranslations: isEnabled(state)
})

const mapDispatch = (_dispatch: RootDispatch): MapDispatchProps => ({})

const mergeProps = (
  stateProps: MapStateProps,
  dispatchProps: MapDispatchProps,
  ownProps: NavbarProps
): NavbarProps => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps
})

export default connect(
  mapState,
  mapDispatch,
  mergeProps
)(Navbar) as any
