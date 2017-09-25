import React from "react";
import Tags from "./Tags";

class SimpleItem extends React.Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <span className="btn btn-primary pull-right"> take </span>
          <h4 style={{ marginTop: "-4px" }} > { this.props.name } </h4>
          <Tags 
            status={ this.props.status }
            isActive={ this.props.isActive }
            isActive={ this.props.isArchived }
            tags={ this.props.tags }
          />
        </div>
      </div>
    );
  }
}

export default SimpleItem;
