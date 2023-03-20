import React from 'react';
import './Cards.css';
import { Card } from './Card';
import { IData } from 'components/data/interfaces/IData';

const Cards: React.FC<{ data: IData[] }> = ({ data }) => {
  return (
    <div className="cards-container">
      {data.map((card: IData, i: number) => (
        <Card key={i} info={card} />
      ))}
    </div>
  );
};

export { Cards };
