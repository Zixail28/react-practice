import { render } from '@testing-library/react';
import { Cards } from '.';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { mockArr } from '../../../components/data/mocks/dataForCards';

test('Cards test', () => {
  render(<Cards data={mockArr} />);
  const cardElems = document.querySelector('.cards-container');
  expect(cardElems!.children.length).toEqual(mockArr.length * 2 + 1);
});
