// temporary
import people from '../data.json';

import React from "react";
import SimpleItem from "./SimpleItem";
const classNames = require('classnames');

class AllItems extends React.Component {
  render() {
    const paneClass = classNames({
      "tab-pane" : true,
      "active" : this.props.isActive
    })

    const listItems = people.map((item) =>
      <SimpleItem 
        name={ item.name }
        status={ item.stage }
        isActive={ item.isActive }
        isArchived={ item.isArchived }
        tags={ item._tags }
      />
    );

    return (
      <div role="tabpanel" className={ paneClass } id="all">
        { listItems }
      </div>
    );
  }
}

export default AllItems;
