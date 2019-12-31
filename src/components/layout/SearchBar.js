import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { getAutoComplete } from '../../actions/weatherActions';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
    alignContent: 'center'
  }
}));

const SearchBar = ({ match: { params }, history, getAutoComplete }) => {
  useEffect(() => {
    text.current.value = params.cityName || 'Tel Aviv';
    handleChange(0);
  });

  const text = useRef('');

  let searchTimeout;

  const handleChange = time => {
    text.current.value = text.current.value.replace(/[^a-zA-Z\s]/g, '');
    if (params.cityName && params.cityName !== text.current.value) {
      history.push(`/`);
    } else {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        getAutoComplete(text.current.value);
      }, time);
    }
  };

  const classes = useStyles();

  return (
    <Grid container justify='center'>
      <TextField
        inputRef={text}
        onChange={() => handleChange(2000)}
        className={classes.margin}
        id='input-with-icon-textfield'
        placeholder='Search city...'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <SearchIcon />
            </InputAdornment>
          )
        }}
      />
    </Grid>
  );
};

export default connect(null, { getAutoComplete })(SearchBar);
