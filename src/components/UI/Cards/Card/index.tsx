import { IData } from '../../../../components/data/interfaces/IData';
import React, { useState } from 'react';
import './Card.css';

const Card = (props: { info: IData }) => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <>
      <div
        className="movie"
        onClick={() => {
          setActive(true);
        }}
      >
        <img
          src={`https://image.tmdb.org/t/p/w1280${props.info.poster_path}`}
          alt={props.info.original_title}
        />
        <div className="movie-info">
          <h3>{props.info.original_title}</h3>
          <span
            className={
              props.info.vote_average >= 8
                ? 'green'
                : props.info.vote_average < 5
                ? 'red'
                : 'orange'
            }
          >
            {props.info.vote_average.toFixed(1)}
          </span>
        </div>
      </div>
    </>
  );
};

export { Card };
