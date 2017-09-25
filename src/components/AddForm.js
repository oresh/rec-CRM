import React from "react";
import FormGroup from "./FormGroup";
const classNames = require('classnames');

class AddForm extends React.Component {
  render() {
    const paneClass = classNames({
      "tab-pane" : true,
      "active" : this.props.isActive
    })

    const fieldNames =  ["Name", "Position", "Linkedin"];
    const fields = fieldNames.map((item) =>
      <FormGroup name={item} />
    );

    return (
      <div role="tabpanel" className={paneClass} id="add">
        <form>
          { fields }
          <button type="submit" className="btn btn-primary btn-block">
            Add person
          </button>
        </form>
      </div>
    );
  }
}

export default AddForm;
