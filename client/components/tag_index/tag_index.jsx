import React from 'react';
import { Link } from 'react-router-dom';

const TagIndex = ({ tags }) => {
  const tagIndex = tags.map((tag) => <li>{tag.name}</li>)
  return <ul>{tagIndex}</ul>;
};
export default TagIndex;