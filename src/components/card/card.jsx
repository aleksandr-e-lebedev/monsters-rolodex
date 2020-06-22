import React from 'react';
import PropTypes from 'prop-types';

import './card.css';

const Card = ({ monster }) => {
  return (
    <div className="card">
      <img
        src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
        alt="monster"
      />
      <h2>{monster.name}</h2>
      <p>{monster.email}</p>
    </div>
  );
};

Card.propTypes = {
  monster: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
