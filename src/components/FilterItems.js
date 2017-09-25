import React from "react";
import Tag from "./Tag";

class FilterItems extends React.Component {
  render() {
    return (
      <div role="tabpanel" className="tab-pane" id="filters">
        <div className="row">
          <div className="col-xs-1">
            <span>
              <b>OR:</b>
            </span>
          </div>
          <div className="col-xs-11">
            <Tag />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-xs-1">
            <span>
              <b>AND:</b>
            </span>
          </div>
          <div className="col-xs-11">
            <Tag />
          </div>
        </div>
        <br />
        <div className="panel panel-default">
          <div className="panel-body">
            <span className="btn btn-primary pull-right">take</span>
            <span
              className="btn btn-primary pull-right"
              style={{
                marginRight: 7
              }}
            >
              expand
            </span>
            <h4
              style={{
                marginTop: "-4px"
              }}
            >
              Ivan Fiodorovich
            </h4>
            <span className="btn btn-xs btn-default">
              <span className="glyphicon glyphicon-list-alt" /> Pass
            </span>
            <span className="btn btn-xs btn-info">andrew</span>
            <span className="btn btn-xs btn-info">email sent</span>
            <span className="btn btn-xs btn-success">good</span>
          </div>
        </div>
      </div>
    );
  }
}

export default FilterItems;
