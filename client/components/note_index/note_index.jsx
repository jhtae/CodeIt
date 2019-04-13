import React from 'react';
import TagIndex from '../tag_index/tag_index';
import 'highlight.js/styles/monokai.css';

class NoteIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "/highlight.pack.js";
    script.async = true;

    document.body.appendChild(script);
    hljs.initHighlightingOnLoad();
    document.querySelectorAll('#codeblock').forEach((block) => {
      hljs.highlightBlock(block);
    });
    <script>hljs.initHighlightingOnLoad();</script>

  }

  componentDidUpdate(props, state) {
    if (this.props.notes.length !== props.notes.length) {
      document.querySelectorAll('#codeblock').forEach((block) => {
        hljs.highlightBlock(block);
      });
    }
  }

  render() {
    const { notes } = this.props;
    let noteIndex = notes.map((note) => {
      console.log(note)
      return (
        <li>
          <div>{note.description}</div>
          <pre id="codeblock" style={{ whiteSpace: "pre-wrap" }}><code>{note.note}</code></pre>
          <TagIndex tags={note.tags} />
        </li>
      )
    })
    return (
      <section>
        <ul>
          {noteIndex}
        </ul>
      </section>
    );
  }
}

export default NoteIndex;

