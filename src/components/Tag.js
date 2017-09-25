import React from "react";
const classNames = require('classnames');

class Tag extends React.Component {
  render() {
    const color = this.props.color ? "btn-" + this.props.color : 'btn-success';
    const size = this.props.isSmall ? "btn-xs" : "btn-sm";
    const btnClasses = classNames("btn", color, size);

    const checkMark = this.props.isChecked ? <span class="glyphicon glyphicon-ok"></span> : '';

    return <span className={ btnClasses }>{ checkMark }{ this.props.name }</span>;
  }
}

export default Tag;
