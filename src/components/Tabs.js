import React from "react";
import AddForm from "./AddForm";
import AllItems from "./AllItems";
import ActiveItems from "./ActiveItems";
import FilterItems from "./FilterItems";
import Stats from "./Stats";

class Tabs extends React.Component {
  render() {
    return (
      <div className="main-content">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="tab-content">
                <AddForm />
                <AllItems isActive={true} />
                <ActiveItems />
                <FilterItems />
                <Stats />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tabs;
