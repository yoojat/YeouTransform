import IndexPresenter from "./indexPresenter";
import withLayout from "../../components/withLayout";

const MAN1 = "MAN1";
const WOMAN1 = "WOMAN1";
const WOMAN2 = "WOMAN2";
class IndexContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      man1Changed: false,
      woman1Changed: false,
      woman2Changed: false
    };
  }
  render() {
    const { man1Changed, woman1Changed, woman2Changed } = this.state;
    return (
      <IndexPresenter
        onHumanClick={this.onHumanClick}
        man1Changed={man1Changed}
        woman1Changed={woman1Changed}
        woman2Changed={woman2Changed}
      />
    );
  }

  onHumanClick = target => {
    switch (target) {
      case MAN1:
        this.setState({ man1Changed: !this.state.man1Changed });
        break;
      case WOMAN1:
        this.setState({ woman1Changed: !this.state.woman1Changed });
        break;
      case WOMAN2:
        this.setState({ woman2Changed: !this.state.woman2Changed });

        break;
      default:
        break;
    }
  };
}

export default withLayout(IndexContainer);
