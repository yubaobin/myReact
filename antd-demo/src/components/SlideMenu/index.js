import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'
import SliderMenu from './SlideMenu'
import { getFlatMenuKeys } from './SlideMenuUtil'


@withRouter
class SlideMenuContainer extends Component {
  constructor(props) {
    super(props);
    const { menuList } = props;
    const flatMenuKeys = getFlatMenuKeys(menuList);
    this.state = {
      flatMenuKeys: flatMenuKeys
    }
  }

  render() {
    const { flatMenuKeys } = this.state
    return (
      <SliderMenu
        flatMenuKeys={flatMenuKeys}
        {...this.props}
      />
    )
  }
}

SlideMenuContainer.propTypes = {
  menuList: PropTypes.array,
  clickItem: PropTypes.func
}

export default SlideMenuContainer