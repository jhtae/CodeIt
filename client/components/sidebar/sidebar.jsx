import React from 'react';
import NotebookIndex from '../notebook/notebook_index_container';

import './sidebar.scss'
class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchNotebooksByUser(this.props.user.id);
  }

  handleClick(e, notebook) {
    e.preventDefault();
    this.props.updateNotes(notebook.notes)
  }

  render() {
    const { user } = this.props;
    return (
      <section className='sidebar'>
        <div onClick={this.handleClick}>All</div>
        <NotebookIndex />
      </section>
    );
  }
}

export default Sidebar;

