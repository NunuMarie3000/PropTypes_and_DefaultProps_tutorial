import React from 'react'
import PropTypes from 'prop-types';

export default function Link({ title, content, users }) {
  return (
    <div>
      {JSON.stringify(users)}
      <a href="https://reactjs.org/">{title}</a>
        <p>
          {content}
        </p>
    </div>
  )
}

Link.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  users: PropTypes.array,
}

Link.defaultProps = {
  users: ['Mathew, Mark, Luke, John'],
  title: "Default Title"
}
