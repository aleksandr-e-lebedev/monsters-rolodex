import React from 'react';
import PropTypes from 'prop-types';

import './card-list.css';

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => (
        <h2 key={monster.id}> {monster.name} </h2>
      ))}
    </div>
  );
};

CardList.propTypes = {
  monsters: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CardList;
