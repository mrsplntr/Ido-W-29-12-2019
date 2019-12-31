import React from 'react';
import { withRouter } from 'react-router-dom';

import SearchBar from '../layout/SearchBar';
import SearchAutoComplete from '../layout/SearchAutoComplete';
import Current from '../layout/Current';
import FiveDays from '../layout/FiveDays';

const Home = props => {
  return (
    <div>
      <SearchBar {...props} />
      <SearchAutoComplete />
      <Current />
      <FiveDays />
    </div>
  );
};

export default withRouter(Home);
