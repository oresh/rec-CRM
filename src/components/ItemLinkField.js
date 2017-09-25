import React from "react";

class ItemLinkField extends React.Component {
  render() {
    return (
      <div className="form-group">
        <label className="col-xs-3 control-label">LinkedIn profile</label>
        <div className="col-xs-9">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="linkedin.com/"
            />
            <div className="input-group-addon btn btn-warning">
              <span className="glyphicon glyphicon-link" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemLinkField;
