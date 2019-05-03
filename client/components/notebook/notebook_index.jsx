import React from 'react';
import TagIndex from '../tag_index/tag_index_container';
import hljs from 'highlight.js';

import './notebook_index.scss';

class NotebookIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.fetchAllNotes = this.fetchAllNotes.bind(this);
  }

  handleClick(e, notebook) {
    e.preventDefault();
    this.props.updateNotes(notebook.notes);
  }

  fetchAllNotes(e) {
    e.preventDefault();
    this.props.fetchUserNotes(this.props.user.id);
  }

  render() {
    const { notebooks } = this.props;
    let notebookIndex = notebooks.map((notebook) => {
      return (
        <li className='notebook_item'>
          <div className='notebook_name' onClick={e => this.handleClick(e, notebook)}>{notebook.name}</div>
        </li>
      )
    })
    return (
      <section className='notebook_index'>
        <div className='notebook_title'>Notebooks</div>
        <div className='all_notes' onClick={this.fetchAllNotes}>All</div>
        <ul>
          {notebookIndex}
        </ul>
        <div className='notebook_button'>+</div>
      </section>
    );
  }
}

export default NotebookIndex;

