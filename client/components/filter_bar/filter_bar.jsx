import React from 'react';
import merge from 'lodash/merge';

import TagIndex from '../tag_index/tag_index_container';

import './filter_bar.scss';

class FilterBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: '',
      tags: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitTag = this.submitTag.bind(this);
  }

  componentDidUpdate(props, state) {
    if (this.props.tags.length && this.props.tags !== this.state.tags) {
      this.setState({ tags: this.props.tags })
    }
  }

  handleChange(e, field) {
    e.preventDefault();
    this.setState({ [field]: e.target.value });
  }

  submitTag(e) {
    if (event.keyCode === 13) {
      this.props.updateFilters(e, 'tag', { id: '', name: this.state.tag })
      this.setState({ tag: '' })
    }
  }

  render() {
    return (
      <section className='filter_bar'>
        <input
          className='tag_input'
          onChange={e => this.handleChange(e, 'tag')}
          onKeyDown={this.submitTag}
          value={this.state.tag}
          placeholder="Enter filter string here"
        />
        <TagIndex
          tags={this.state.tags}
          updateFilters={this.updateFilters} />
      </section>
    );
  }
}

export default FilterBar;


