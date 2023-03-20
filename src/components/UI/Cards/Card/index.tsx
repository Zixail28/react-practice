import { IData } from '../../../../components/data/interfaces/IData';
import React from 'react';
import './Card.css';

class Card extends React.Component<{ info: IData }> {
  constructor(props: { info: IData }) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="movie">
          <img src={`${this.props.info.poster_path}`} alt={this.props.info.original_title} />
          <div className="movie-info">
            <h3>{this.props.info.original_title}</h3>
            <span
              className={
                this.props.info.vote_average >= 8
                  ? 'green'
                  : this.props.info.vote_average < 5
                  ? 'red'
                  : 'orange'
              }
            >
              {this.props.info.vote_average.toFixed(1)}
            </span>
          </div>
        </div>
      </>
    );
  }
}

export { Card };
