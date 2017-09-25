import React from "react";

class ItemTextareaField extends React.Component {
  render() {
    return (
      <div className="form-group">
        <label className="col-xs-3 control-label">Interests</label>
        <div className="col-xs-9">
          <textarea
            className="form-control"
            placeholder="Interests"
            defaultValue={""}
          />
        </div>
      </div>
    );
  }
}

export default ItemTextareaField;
