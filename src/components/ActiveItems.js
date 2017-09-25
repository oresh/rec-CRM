import React from "react";
import ActiveTags from "./ActiveTags";
import FullItem from "./FullItem";

class ActiveItems extends React.Component {
  render() {
    return (
      <div role="tabpanel" className="tab-pane" id="active">
        <ActiveTags />
        <br />
        <FullItem />
      </div>
    );
  }
}

export default ActiveItems;
