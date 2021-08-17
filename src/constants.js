import { randomId } from './utils';
import PropTypes from 'prop-types';

export const initialState = 
[{
    id: randomId(),
    name: 'Player 1',
    initiative: 20,
    hitpoints: 8,
  }, {
    id: randomId(),
    name: 'Player 2',
    initiative: 19,
    hitpoints: 10,
  }, {
    id: randomId(),
    name: 'Player 3',
    initiative: 18,
    hitpoints: 9,
  }, {
    id: randomId(),
    name: 'Player 4',
    initiative: 17,
    hitpoints: 11,
  }]

  export const ElementType = PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    hitpoints: PropTypes.oneOfType([
      PropTypes.number, 
      PropTypes.string]
    ),
    initiative: PropTypes.oneOfType([
      PropTypes.number, 
      PropTypes.string]
    ),
  })