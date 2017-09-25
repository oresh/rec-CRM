import React from "react";
const slug = require('slug')

class FormGroup extends React.Component {
  render() {
    const id = slug(this.props.name) + "-field";

    return (
      <div className="form-group">
        <label htmlFor={ id }>{ this.props.name }</label>
        <input
          type="text"
          className="form-control"
          id={ id }
          placeholder={ this.props.name }
        />
      </div>
    );
  }
}

export default FormGroup;
