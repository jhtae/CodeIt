import React from 'react';
import { Link } from 'react-router-dom';
import './tag_index.scss';

class TagIndex extends React.Component {
  constructor(props) {
    super(props);
    this.filterByTag = this.filterByTag.bind(this);
    // this.removeTag = this.removeTag.bind(this);
  }

  filterByTag(e, tag) {
    e.preventDefault()
    this.props.updateFilters(e, 'tag', tag);
  }

  render() {
    let tags = this.props.tags || this.props.currentNote.tags || [];
    let removeTag = !this.props.tags && this.props.currentNote.tags ? removeTag : '';
    const tagIndex = tags.map((tag) => <li className='tag' onClick={e => this.filterByTag(e, tag)}>{tag.name}</li>);
    return <ul className='tag_index'>{tagIndex}</ul>;
  }
};
export default TagIndex;