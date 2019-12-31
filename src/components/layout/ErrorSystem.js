import React from 'react';
import { connect } from 'react-redux';

import ErrorDialog from './ErrorDialog';

const ErrorSystem = ({ weatherError, favoritesError }) => {
  const [toggle, setToggle] = React.useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  if (weatherError !== null || favoritesError !== null) {
    return (
      <ErrorDialog
        message={weatherError.message || favoritesError.message}
        toggle={toggle}
        handleToggle={handleToggle}
      />
    );
  }

  return <div></div>;
};

const mapStateToProps = state => ({
  weatherError: state.weather.error,
  favoritesError: state.favorites.error
});

export default connect(mapStateToProps, null)(ErrorSystem);
