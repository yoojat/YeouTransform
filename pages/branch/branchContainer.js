import { Query } from "react-apollo";
import BranchPresenter from "./branchPresenter";
import { BRANCHES_QUERY, BRANCH_QUERY } from "./branchQueries";
import Router, { withRouter } from "next/router";

class BranchContainer extends React.Component {
  static async getInitialProps(props) {
    const {
      query: { id: branchId }
    } = props;
    return {
      branchId
    };
  }
  constructor(props) {
    super(props);
    this.state = {
      selBranchId: "",
      selBranchName: ""
    };
  }
  render() {
    const { selBranchId } = this.state;
    const { branchId } = this.props;

    return (
      <Query query={BRANCHES_QUERY}>
        {({ data: branchesData }) => {
          const branchOptions =
            branchesData &&
            branchesData.branches &&
            branchesData.branches.map(branch => ({
              value: branch.id,
              label: branch.name
            }));

          return (
            <Query
              query={BRANCH_QUERY}
              variables={{ id: branchId || branchOptions[0].value }}
            >
              {({ data: branchData }) => {
                const { branch: selBranch } = branchData;
                const branchImgs = Object.values(selBranch.imgs).map(img => ({
                  original: img,
                  thumbnail: img
                }));

                return (
                  <BranchPresenter
                    branchOptions={branchOptions}
                    selBranchId={selBranchId}
                    onOptionChange={this.onOptionChange}
                    selBranch={selBranch}
                    branchImgs={branchImgs}
                  />
                );
              }}
            </Query>
          );
        }}
      </Query>
    );
  }

  onOptionChange = value => {
    const currentRoute = Router.route;
    const { value: selBranchId } = value;

    Router.push({
      pathname: `${currentRoute}`,
      query: { id: selBranchId },
      asPath: `${currentRoute}/${selBranchId}`
    });
  };
}

export default withRouter(BranchContainer);
