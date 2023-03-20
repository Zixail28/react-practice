import React from 'react';
import './Homepage.css';
import { mockcards } from '../components/data/constants/cards';

import { Cards } from '../components/UI/Cards';
import { Search } from '../components/UI/Search';
class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="info-box">
          <Search />
        </div>
        <Cards data={mockcards} />
      </div>
    );
  }
}

export { Home };
