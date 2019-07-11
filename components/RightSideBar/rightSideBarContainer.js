import RightSideBarPresenter from "./rightSideBarPresenter";
import Router, { withRouter } from "next/router";

class RightSideBarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }
  render() {
    const { menuOpen } = this.state;
    return (
      <RightSideBarPresenter
        onMenuClick={this.onMenuClick}
        menuOpen={menuOpen}
        handleStateChange={this.handleStateChange}
      />
    );
  }

  onMenuClick = (e, value) => {
    e.preventDefault();
    this.closeMenu();
    Router.push({
      pathname: `/${value}`
    });
  };

  handleStateChange = state => {
    console.log({ state });
    this.setState({ menuOpen: state.isOpen });
  };

  closeMenu = () => {
    this.setState({ menuOpen: false });
  };
}

export default RightSideBarContainer;
