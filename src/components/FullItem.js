import React from "react";
import Status from "./Status";
import Active from "./Active";
import Archived from "./Archived";
import Tag from "./Tag";
import ItemStatusField from "./ItemStatusField";

class FullItem extends React.Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <span
            className="btn btn-primary pull-right"
            type="button"
            data-toggle="collapse"
            data-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
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
            <span className="glyphicon glyphicon-list-alt" /> Talking
          </span>
          <Status />
          <Active />
          <Archived />
          <Tag />
          <div
            className="collapse"
            id="collapseExample"
            data-compontent="ItemFields"
          >
            <div
              className="well"
              style={{
                marginTop: 20
              }}
            >
              <ItemStatusField />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FullItem;
