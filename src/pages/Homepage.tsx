import React from 'react';
import './Homepage.css';
import { mockcards } from '../components/data/constants/cards';

import { Cards } from '../components/UI/Cards';
import { Search } from '../components/UI/Search';
const Home = (): JSX.Element => {
  return (
    <div className="container">
      <div className="info-box">
        <Search />
      </div>
      <Cards data={mockcards} />
    </div>
  );
};

export { Home };
