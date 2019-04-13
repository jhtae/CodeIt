import React from 'react';
import Sidebar from '../sidebar/sidebar_container';
import NoteIndex from '../note_index/note_index_container';
import NoteForm from '../note_form/note_form_container';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'Default'
    }
  }

  componentDidMount() {
    const { user, notes, fetchUserNotes} = this.props;
    if (!notes.length) {
      fetchUserNotes(user.id)
    }
  }

  componentDidUpdate() {

  }

  render() {
    const { selected } = this.state;
    return (
      <section>
        Main Page
        <Sidebar selected={selected} />
        <NoteIndex />
        <NoteForm />
      </section>
    );
  }
}

export default Main;


