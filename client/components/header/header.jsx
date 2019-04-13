import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <Link to="/" className="header-link">
          <h1>Code It</h1>
        </Link>
      </header>
    );
  }
}

export default Header;


