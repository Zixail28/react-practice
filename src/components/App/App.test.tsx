import { render, screen } from '@testing-library/react';
import App from '../../components/App';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

describe('', () => {
  test('App test', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const searchElem = screen.getByPlaceholderText(/type to search/i);
    expect(searchElem).toBeInTheDocument();
    screen.debug();
  });
});
