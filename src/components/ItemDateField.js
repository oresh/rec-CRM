import React from "react";

class ItemDateField extends React.Component {
  render() {
    return (
      <div className="form-group">
        <label className="col-xs-3 control-label">Next Contact</label>
        <div className="col-xs-9">
          <input type="date" className="form-control" />
        </div>
      </div>
    );
  }
}

export default ItemDateField;
