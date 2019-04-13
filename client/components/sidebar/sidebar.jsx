import React from 'react';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user } = this.props;
    return (
      <section>
        <div>
          {user.username}
        </div>
      </section>
    );
  }
}

export default Sidebar;

