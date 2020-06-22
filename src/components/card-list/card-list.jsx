import React from 'react';
import PropTypes from 'prop-types';

import Card from '../card/card';

import './card-list.css';

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

CardList.propTypes = {
  monsters: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CardList;
