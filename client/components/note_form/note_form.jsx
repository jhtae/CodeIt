import React from 'react';
import 'highlight.js/styles/github.css';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: 1,
      notebook_id: "",
      description: "api-test",
      note: "",
      tags: ["SQL", "Nocommerce"]
    }
    this.checkInput = this.checkInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(props, state) {
    if (this.state.note !== state.note) {
      this.highlight();
    }
  }

  componentDidMount() {
    // hljs.initHighlightingOnLoad();
    // hljs.highlightBlock(document.getElementById("codeblock"));
  }

  highlight() {
    // console.log(document.getElementById("codeblock"))
    // if (document.getElementById("codeblock") != null) {
    //   hljs.highlightBlock(document.getElementById("codeblock"));
    // }
  }

  checkInput(e) {
    if (event.keyCode === 13 && !event.shiftKey) {
      this.handleSubmit(e)
    }
    if (event.keyCode === 9) {
      e.preventDefault();
      let val = e.target.value,
        start = e.target.selectionStart,
        end = e.target.selectionEnd;
      // set textarea value to: text before caret + tab + text after caret
      e.target.value = val.substring(0, start) + '  ' + val.substring(end);
      // put caret at right position again
      e.target.selectionStart = e.target.selectionEnd = start + 1;
      // prevent the focus lose
      return false;
    }
    return false
  }

  handleChange(e) {
    e.preventDefault();
    document.getElementById('codeblock').firstChild.innerHTML = e.target.value;
    this.setState({ note: e.target.value });
    
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createNote(this.state); 
  }

  render() {
    return (
      <section>
        <div>
          <pre id="codeblock" style={{ whiteSpace: "pre-wrap" }}><code>{this.state.note}</code></pre>
        </div>
        <textarea
          id="codeinput"
          onChange={this.handleChange}
          onKeyDown={this.checkInput}
          value={this.state.note}
          style={{ height: "300px" }}
        />
      </section>
    )
  }
}

export default NoteForm;

