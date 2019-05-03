import React from 'react';
import merge from 'lodash/merge';
import Sidebar from '../sidebar/sidebar_container';
import FilterBar from '../filter_bar/filter_bar_container';
import NoteIndex from '../note_index/note_index_container';
import NoteForm from '../note_form/note_form_container';

import './main.scss';
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'Default',
      // filters
      tagNames: [],
      tags: []
    }
    this.updateFilters = this.updateFilters.bind(this);
  }

  updateFilters(e, filterType, value) {
    e.preventDefault();
    if (filterType === 'tag') {
      let tags = merge(this.state.tags, []);
      if (!this.state.tagNames.includes(value.name)) {
        tags.push(value)
        this.state.tagNames.push(value.name)
        this.props.filterNotesByTags(this.state.tagNames);
        this.setState({ tags: tags });
      }
    } else {
      this.setState({ [filterType]: value })
    }
  }

  componentDidMount() {
    const { user, notes, fetchUserNotes } = this.props;
    if (!notes.length) {
      fetchUserNotes(user.id)
    }
  }

  render() {
    const { selected } = this.state;
    return (
      <section className='code_it'>
        <Sidebar selected={selected} />
        <div>
          <FilterBar updateFilters={this.updateFilters} tags={this.state.tags} />
          <NoteIndex updateFilters={this.updateFilters} />
        </div>
        <NoteForm />
      </section>
    );
  }
}

export default Main;


