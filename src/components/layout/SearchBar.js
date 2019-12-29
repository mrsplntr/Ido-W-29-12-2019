import React from 'react';

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

const SearchBar = () => {
  const classes = useStyles();

  return (
    <Grid container justify='center'>
      <TextField
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

export default SearchBar;
