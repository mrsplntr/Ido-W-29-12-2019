import React from 'react';

const iconAPI = 'https://developer.accuweather.com/sites/default/files';

const FiveDaysItem = ({
  date,
  dayMaxTemp,
  dayPhrase,
  dayIcon,
  nightMinTemp,
  nightPhrase,
  nightIcon
}) => {
  return (
    <div>
      {date} <br />
      Day: {dayMaxTemp} {dayPhrase}
      <br />
      <img
        src={`${iconAPI}/${dayIcon < 10 ? '0' + dayIcon : dayIcon}-s.png`}
        alt={dayPhrase}
      />{' '}
      <br />
      Night: {nightMinTemp} {nightPhrase}
      <br />
      <img
        src={`https://developer.accuweather.com/sites/default/files/${
          nightIcon < 10 ? '0' + nightIcon : nightIcon
        }-s.png`}
        alt={nightPhrase}
      />{' '}
      <br />
      <hr />
    </div>
  );
};

export default FiveDaysItem
