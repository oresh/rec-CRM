import React from "react";

class Status extends React.Component {
  render() {
    return (
      <span className="btn btn-xs btn-default">
        <span className="glyphicon glyphicon-list-alt" /> { this.props.status }
      </span>
    );
  }
}

export default Status;
