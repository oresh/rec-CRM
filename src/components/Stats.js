import React from "react";

class Stats extends React.Component {
  render() {
    return (
      <div role="tabpanel" className="tab-pane" id="stats">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Statistic Metric</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td className="col-xs-9">Number of contacts</td>
              <td className="col-xs-3">270</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Stats;
