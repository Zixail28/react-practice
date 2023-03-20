import { render } from '@testing-library/react';
import { Card } from '.';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { mockArr } from '../../../../components/data/mocks/dataForCards';

describe('Card part test', () => {
  render(<Card info={mockArr[0]} />);
  const cardElem = document.querySelector('.movie');
  test('Card create test', () => {
    expect(cardElem).toBeInTheDocument();
  });
  test('Card current content test', () => {
    expect(cardElem!.querySelector('.movie-info h3')?.textContent).toEqual(
      `${mockArr[0].original_title}`
    );
  });
});
