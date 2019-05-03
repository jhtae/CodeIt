import React from 'react';
import merge from 'lodash/merge';

import TagIndex from '../tag_index/tag_index';
import hljs from 'highlight.js';

import 'highlight.js/styles/monokai.css';
import './note_form.scss';
class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      user_id: '',
      notebook_id: '',
      description: '',
      note: '',
      tag: '',
      tags: ''
    }
    this.checkInput = this.checkInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setSelectedNote = this.setSelectedNote.bind(this);
    this.submitTag = this.submitTag.bind(this);
    this.initialNote();
  }

  initialNote(note = this.props.selectedNote) {
    if (!!Object.keys(note).length) {
      this.state.id = note.id;
      this.state.user_id = note.user_id;
      this.state.notebook_id = note.notebook_id;
      this.state.description = note.description;
      this.state.note = note.note;
      this.state.tags = note.tags;
    } else {
      this.state.user_id = this.props.userId
    }
  }

  setSelectedNote(note = this.props.selectedNote) {
    this.setState({
      id: note.id,
      user_id: note.user_id,
      notebook_id: note.notebook_id,
      description: note.description,
      note: note.note,
      tags: note.tags
    });
  }

  componentDidMount() {
    hljs.initHighlightingOnLoad();
    document.querySelectorAll('#codeblock_form').forEach((block) => {
      hljs.highlightBlock(block);
    });
  }

  componentDidUpdate(props, state) {
    if (this.state.note !== state.note) {
      this.highlight();
    }
    if (!!Object.keys(this.props.selectedNote).length && this.props.selectedNote.id !== props.selectedNote.id) {
      document.getElementById('codeblock_form').firstChild.innerHTML = this.props.selectedNote.note;
      this.setSelectedNote(this.props.selectedNote)
    }
  }

  highlight() {
    document.querySelectorAll('#codeblock_form').forEach((block) => {
      block.className = 'hljs';
      hljs.highlightBlock(block);
    });
  }

  checkInput(e) {
    if (event.keyCode === 9) {
      e.preventDefault();
      let val = e.target.value,
        start = e.target.selectionStart,
        end = e.target.selectionEnd;
      // set textarea value to: text before caret + tab + text after caret
      e.target.value = val.substring(0, start) + ' ' + ' ' + val.substring(end);
      // put caret at right position again
      e.target.selectionStart = e.target.selectionEnd = start + 1;
      return false;
    }
    return false
  }

  handleChange(e, field) {
    e.preventDefault();
    if (field === 'note') document.getElementById('codeblock_form').firstChild.innerHTML = e.target.value;
    this.setState({ [field]: e.target.value });
  }

  submitTag(e) {
    if (event.keyCode === 13) {
      let tags = merge([], this.state.tags);
      tags.push({ id: '', name: this.state.tag });
      this.setState({ tags: tags, tag: '' });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createNote(this.state);
  }

  render() {
    return (
      <section class='note_form'>
        <div class='code_display'>
          <pre id="codeblock_form" style={{ whiteSpace: "pre-wrap" }}><code>{this.state.note}</code></pre>
        </div>
        <input
          id="description_input"
          onChange={e => this.handleChange(e, 'description')}
          value={this.state.description}
          placeholder='Please enter the description here'
        />
        <textarea
          id="codeinput"
          className='note_input'
          onChange={e => this.handleChange(e, 'note')}
          onKeyDown={this.checkInput}
          value={this.state.note} f
        />
        <TagIndex currentNote={this.state} />
        <div className='row'>
          <input
            className='tag_input'
            onChange={e => this.handleChange(e, 'tag')}
            onKeyDown={this.submitTag}
            value={this.state.tag}
            placeholder="Please enter tags here. Enter to submit a tag"
          />
          <button
            className='submit'
            onClick={this.handleSubmit}>
            Submit
        </button>
        </div>
      </section>
    )
  }
}

export default NoteForm;

