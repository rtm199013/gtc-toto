import React from "react";

class HelloContent extends React.Component {
  render() {
    return <div>Show props: {this.props.propsName}</div>;
  }
}

export default HelloContent;
