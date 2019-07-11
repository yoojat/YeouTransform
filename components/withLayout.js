import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const withLayout = Component => {
  return class extends React.Component {
    render() {
      return (
        <div>
          <Header />
          <Component />
          <Footer />
        </div>
      );
    }
  };
};

export default withLayout;
