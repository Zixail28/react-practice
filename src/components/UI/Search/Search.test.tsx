import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import App from '../../App';
import { BrowserRouter } from 'react-router-dom';

type lSType = string | number;

interface localStorage {
  setItem(key: lSType, value: lSType): void;
  getItem(key: lSType): lSType;
  clear(): void;
  removeItem(key: lSType): void;
  getAll(): IStore;
}

interface IStore {
  [index: lSType]: lSType;
}

describe('Search localstorage test', () => {
  const localStorageMock = (function (): localStorage {
    let store: IStore = {};

    return {
      setItem(key, value) {
        store[key] = value;
      },
      getItem(key) {
        return store[key];
      },
      clear() {
        store = {};
      },
      removeItem(key) {
        delete store[key];
      },
      getAll() {
        return store;
      },
    };
  })();
  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
  });

  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  it('save value in search input after unmount/mount', async () => {
    let searchInput = screen.getByPlaceholderText(/type to search/i);
    expect((searchInput! as HTMLInputElement).value).toEqual('');
    await userEvent.type(searchInput!, 'test text');
    expect((searchInput! as HTMLInputElement).value).toEqual('test text');
    userEvent.click(screen.getByText(/aboutus/i));
    userEvent.click(screen.getByText(/home/i));
    searchInput = screen.getByPlaceholderText(/type to search/i);
    expect((searchInput! as HTMLInputElement).value).toEqual('test text');
  });
});
