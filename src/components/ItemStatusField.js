import React from "react";
import ItemTagsField from "./ItemTagsField";
import ItemLinkField from "./ItemLinkField";
import ItemTextField from "./ItemTextField";
import ItemTextareaField from "./ItemTextareaField";
import ItemDateField from "./ItemDateField";
import ItemUpdatesTable from "./ItemUpdatesTable";

class ItemStatusField extends React.Component {
  render() {
    return (
      <form className="form-horizontal">
        <div className="form-group">
          <label className="col-xs-3 control-label">Stage</label>
          <div className="col-xs-9">
            <div className="input-group">
              <select className="form-control">
                <option>None</option>
                <option>Skip</option>
                <option>Temporary pass</option>
                <option>Getting information</option>
                <option>Needs talking</option>
                <option>Messege sent</option>
                <option selected="selected">Talking</option>
                <option>Pass</option>
                <option>Invited for Coffee</option>
                <option>Invited for Popcorn</option>
                <option>Invited for Team interview</option>
                <option>Zoom call with Aryk</option>
                <option>Zoom call with Scott</option>
                <option>Job offer</option>
                <option>Refused</option>
              </select>
              <div className="input-group-addon btn btn-warning">
                <span className="glyphicon glyphicon-inbox" /> Archive
              </div>
            </div>
          </div>
        </div>
        <ItemTagsField />
        <ItemLinkField />
        <ItemTextField />
        <ItemTextareaField />
        <ItemDateField />
        <label className="col-xs-3 control-label">
          <button
            className="btn btn-primary"
            type="button"
            data-toggle="collapse"
            data-target="#change-dates"
            aria-expanded="false"
            aria-controls="change-dates"
          >
            Show dates
          </button>
        </label>
        <div className="col-xs-9">
          <div className="collapse" id="change-dates">
            <ItemUpdatesTable />
          </div>
        </div>
      </form>
    );
  }
}

export default ItemStatusField;
