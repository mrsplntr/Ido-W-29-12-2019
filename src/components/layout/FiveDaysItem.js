import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const iconAPI = 'https://developer.accuweather.com/sites/default/files';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '0 5% 0 5%',
    width: '200px'
  }
}));

const FiveDaysItem = ({
  date,
  dayMaxTemp,
  dayPhrase,
  dayIcon,
  nightMinTemp,
  nightPhrase,
  nightIcon
}) => {
  const classes = useStyles();
  
  const dayIconFormated =
    `${iconAPI}/${dayIcon < 10 ? '0' + dayIcon : dayIcon}-s.png`;
  const nightIconnFormated =
    `${iconAPI}/${nightIcon < 10 ? '0' + nightIcon : nightIcon}-s.png`;
  
  return (
    <div className={classes.root}>
      <Paper>
        <Typography
          style={{ paddingTop: '10px', color: 'rgba(0, 159, 219,1)' }}
          variant='h5'
        >
          {date}
        </Typography>
        <Typography
          style={{ height: '50px' }}
          variant='body2'
          color='textSecondary'
        >
          {dayPhrase}
        </Typography>
        <img src={dayIconFormated} alt={dayPhrase} />
        <Typography variant='body1'>{dayMaxTemp}</Typography>

        <Typography
          variant='h5'
          style={{ marginTop: '30px', color: 'rgba(0, 159, 219,1)' }}
        >
          Night
        </Typography>
        <Typography
          style={{ height: '50px' }}
          variant='body2'
          color='textSecondary'
        >
          {nightPhrase}
        </Typography>
        <img src={nightIconnFormated} alt={nightPhrase} />
        <Typography style={{ paddingBottom: '10px' }} variant='body1'>
          {nightMinTemp}
        </Typography>
      </Paper>
    </div>
  );
};

export default FiveDaysItem
