import React from 'react';
import './Cards.css';
import { Card } from './Card';
import { IData } from 'components/data/interfaces/IData';

class Cards extends React.Component<{ data: IData[] }> {
  constructor(props: { data: IData[] }) {
    super(props);
  }
  render() {
    return (
      <div className="cards-container">
        {this.props.data.map((card: IData, i: number) => (
          <Card key={i} info={card} />
        ))}
      </div>
    );
  }
}

export { Cards };
