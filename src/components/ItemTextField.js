import React from "react";

class ItemTextField extends React.Component {
  render() {
    return (
      <div className="form-group">
        <label className="col-xs-3 control-label">Current Position</label>
        <div className="col-xs-9">
          <input
            type="text"
            className="form-control"
            placeholder="Web developer"
          />
        </div>
      </div>
    );
  }
}

export default ItemTextField;
