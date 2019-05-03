import React from 'react';

import TagIndex from '../tag_index/tag_index_container';
import hljs from 'highlight.js';

import 'highlight.js/styles/monokai.css';
import './note_index.scss';
class NoteIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    hljs.initHighlightingOnLoad();
    this.updateCodeSyntaxHighlighting();
  }

  componentDidUpdate(props, state) {
    this.updateCodeSyntaxHighlighting();
  }

  handleClick(e, note) {
    e.preventDefault();
    this.props.updateSelectedNote(note)
  }

  updateCodeSyntaxHighlighting() {
    let codeblocks = document.querySelectorAll("pre code")
    codeblocks.forEach(block => {
      block.className = 'hljs';
      hljs.highlightBlock(block);
    });
  };

  render() {
    const { notes } = this.props;
    let noteIndex = notes.map((note) => {
      return (
        <li className='note_item'>
          <div className='note_description'>{note.description}</div>
          <pre id="codeblock" onClick={e => this.handleClick(e, note)} style={{ whiteSpace: "pre-wrap" }}><code dangerouslySetInnerHTML={{ __html: note.note }}></code></pre>
          <TagIndex tags={note.tags} updateFilters={this.props.updateFilters} />
        </li>
      )
    })
    return (
      <section className='note_index' >
        <ul>
          {noteIndex}
        </ul>
      </section>
    );
  }
}

export default NoteIndex;

