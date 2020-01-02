import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import Grid from '@material-ui/core/Grid';

import FiveDaysItem from './FiveDaysItem';

const FiveDays = ({ fiveDays }) => {
  if (fiveDays === null) {
    return <></>;
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <Grid container spacing={1}>
        <Grid item xs={false} sm={false} md={1} lg={1}></Grid>
        {fiveDays['DailyForecasts'].map((d, i) => (
          <Grid key={i} item xs={12} sm={12} md={2} lg={2}>
            <Grid container justify='center'>
              <FiveDaysItem
                date={moment(d.Date).format('dddd')}
                dayMaxTemp={d.Temperature.Maximum.Value + `'c`}
                dayPhrase={d.Day.IconPhrase}
                dayIcon={d.Day.Icon}
                nightMinTemp={d.Temperature.Minimum.Value + `'c`}
                nightPhrase={d.Night.IconPhrase}
                nightIcon={d.Night.Icon}
              />
            </Grid>
          </Grid>
        ))}
        <Grid item xs={false} sm={false} md={1} lg={1}></Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = state => ({
  fiveDays: state.weather.fiveDays
});

export default connect(mapStateToProps, null)(FiveDays);
