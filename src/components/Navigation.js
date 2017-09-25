import React from "react";

class Navigation extends React.Component {
  render() {
    const items = [
      { name: '+', link: 'add' },
      { name: 'all' },
      { name: 'active', isActive: true },
      { name: 'filters' },
      { name: 'stats' }
    ];
    
    const listItems = items.map((item) =>
      <li role="presentation" className={ item.isActive ? 'active' : '' }>
        <a href={ item.link ? '#'+item.link : '#'+item.name } aria-controls="home" role="tab" data-toggle="tab">
          { item.name }
        </a>
      </li>
    );

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="page-header">
              <ul className="nav nav-tabs" role="tablist">
                { listItems }
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
