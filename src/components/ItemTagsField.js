import React from "react";
import ItemStatusTags from "./ItemStatusTags";
import ItemOtherTags from "./ItemOtherTags";

class ItemTagsField extends React.Component {
  render() {
    return (
      <div className="form-group">
        <label className="col-xs-3 control-label">Tags</label>
        <div className="col-xs-9">
          <ItemStatusTags />
          <br />
          <ItemOtherTags />
        </div>
      </div>
    );
  }
}

export default ItemTagsField;
