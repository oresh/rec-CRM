import React from "react";
import Active from "./Active";
import Tag from "./Tag";

class ItemStatusTags extends React.Component {
  render() {
    return (
      <div>
        <Active />
        <Tag />
      </div>
    );
  }
}

export default ItemStatusTags;
