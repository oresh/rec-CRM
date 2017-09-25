import React from "react";
import Status from "./Status";
import Tag from "./Tag";

class Tags extends React.Component {
  render() {
    const tags = this.props.tags.map((item) =>
      <Tag
        name={ item.name }
        color={ item. color }
        isSmall={ true }
      />
    );
    return (
      <div className="tags">
        <Status status={ this.props.status } />
        { this.props.isActive && <span className="btn btn-xs btn-danger"> active</span> }
        { this.props.isArchived && <span className="btn btn-xs btn-warning"> archived</span> }
        { tags }
      </div>
    );
  }
}

export default Tags;
