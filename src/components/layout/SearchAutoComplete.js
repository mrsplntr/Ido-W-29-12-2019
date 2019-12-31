import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getFiveDays, getCurrent } from '../../actions/weatherActions';

const SearchAutoComplete = ({ autoComplete, getFiveDays, getCurrent }) => {
  useEffect(() => {
    if (autoComplete !== null && autoComplete.length > 0) {
      getFiveDays(autoComplete[0].Key, autoComplete[0].LocalizedName);
      getCurrent(autoComplete[0].Key, autoComplete[0].LocalizedName);
    }
  }, [autoComplete, getFiveDays, getCurrent]);

  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        {autoComplete !== null &&
          autoComplete.map((c, i) => (
            <div key={`${c.key} ${i}`}>{c.LocalizedName}</div>
          ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  autoComplete: state.weather.autoComplete
});

export default connect(mapStateToProps, { getFiveDays, getCurrent })(SearchAutoComplete);
