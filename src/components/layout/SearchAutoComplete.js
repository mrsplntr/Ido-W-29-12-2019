import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getFiveDays, getCurrent } from '../../actions/weatherActions';

import Typography from '@material-ui/core/Typography';

const SearchAutoComplete = ({ autoComplete, getFiveDays, getCurrent }) => {
  useEffect(() => {
    if (autoComplete !== null && autoComplete.length > 0) {
      getFiveDays(autoComplete[0].Key, autoComplete[0].LocalizedName);
      getCurrent(autoComplete[0].Key, autoComplete[0].LocalizedName);
    }
  }, [autoComplete, getFiveDays, getCurrent]);

  if (autoComplete !== null && autoComplete.length === 0) {
    return (
      <Typography align='center' variant='body2' color='textSecondary'>
        No results found for the query...
      </Typography>
    );
  }

  return (
    <>
      {autoComplete !== null &&
        autoComplete.map((c, i) => (
          <Typography key={`${c.key} ${i}`} align='center' variant='body1'>
            {c.LocalizedName}
          </Typography>
        ))}
    </>
  );
};

const mapStateToProps = state => ({
  autoComplete: state.weather.autoComplete
});

export default connect(mapStateToProps, { getFiveDays, getCurrent })(SearchAutoComplete);
