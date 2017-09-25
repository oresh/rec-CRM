import React from "react";
import ItemUpdatesRow from "./ItemUpdatesRow";

class ItemUpdatesTable extends React.Component {
  render() {
    return (
      <table className="table table-striped table-condensed">
        <tbody>
          <ItemUpdatesRow />
        </tbody>
      </table>
    );
  }
}

export default ItemUpdatesTable;
