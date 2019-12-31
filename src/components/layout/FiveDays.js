import React from 'react';
import { connect } from 'react-redux';

import FiveDaysItem from './FiveDaysItem';
// const iconAPI = 'https://developer.accuweather.com/sites/default/files';

const FiveDays = ({ fiveDays }) => {
  if (fiveDays === null) {
    return <span>loading....</span>
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <hr />
      {fiveDays['DailyForecasts'].map((d, i) => (
        <FiveDaysItem
          key={i}
          date={d.Date}
          dayMaxTemp={d.Temperature.Maximum.Value + `'c`}
          dayPhrase={d.Day.IconPhrase}
          dayIcon={d.Day.Icon}
          nightMinTemp={d.Temperature.Minimum.Value + `'c`}
          nightPhrase={d.Night.IconPhrase}
          nightIcon={d.Night.Icon}
        />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  fiveDays: state.weather.fiveDays
});

export default connect(mapStateToProps, null)(FiveDays);
