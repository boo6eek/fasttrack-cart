import PropTypes from 'prop-types';

export default {
  classes: PropTypes.object.isRequired,
  urlQuery: PropTypes.object.isRequired,
  getCart: PropTypes.func.isRequired,
  updateCart: PropTypes.func.isRequired,
  pushCart: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired
};
