import { fireEvent, getByPlaceholderText, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import App from '../../../components/App';
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

describe('Forms tests', () => {
  beforeEach(() => {
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
  });
  it('test forms layout render', async () => {
    const nav = document.querySelector('header');
    const navHome = nav?.children[0];
    const navForms = nav?.children[1];
    if (navHome === undefined || navForms === undefined) {
      throw Error('navHome or navForms is undefined');
    }
    expect(document.querySelector('.info-box')).toBeInTheDocument();
    expect(document.querySelector('.form-box')).not.toBeInTheDocument();
    await userEvent.click(navForms);
    expect(document.querySelector('.info-box')).not.toBeInTheDocument();
    expect(document.querySelector('.form-box')).toBeInTheDocument();

    // expect((searchInput! as HTMLInputElement).value).toEqual("");
    // userEvent.type(searchInput!, "test text");
    // expect((searchInput! as HTMLInputElement).value).toEqual("test text");
    // userEvent.click(screen.getByText(/aboutus/i));
    // userEvent.click(screen.getByText(/home/i));
    // searchInput = document.querySelector(".search-txt");
    // expect((searchInput! as HTMLInputElement).value).toEqual("test text");
  });
  it('check validation', async () => {
    const nav = document.querySelector('header');
    const navForms = nav?.children[1];
    if (navForms === undefined) {
      throw Error('navForms is undefined');
    }
    await userEvent.click(navForms);
    const btnSend = document.querySelector('.form-btn');
    if (btnSend === null) {
      throw Error('btnSend is undefined');
    }
    let errorsText = document.querySelectorAll('span.error-text');
    expect(errorsText.length).toEqual(0);
    await userEvent.click(btnSend);
    errorsText = document.querySelectorAll('span.error-text');
    expect(errorsText.length).toEqual(5);
  });
  it('create a new cardForm', async () => {
    const nav = document.querySelector('header');
    const navForms = nav?.children[1];
    if (navForms === undefined) {
      throw Error('navForms is undefined');
    }
    await userEvent.click(navForms);

    const form = document.querySelector('form');
    if (form === null) {
      throw Error('form is undefined');
    }

    const firstNameInput = form.querySelector('#firstName');
    const lastNameInput = form.querySelector('#lastName');
    const birthDayInput = form.querySelector('.birthDay-input');
    const countrySelect = form.querySelector('.select-county');
    const fileInput = form.querySelector('#file');
    const switchCheckbox = form.querySelector("input[type='checkbox']");

    if (
      !(
        firstNameInput &&
        lastNameInput &&
        birthDayInput &&
        countrySelect &&
        fileInput &&
        switchCheckbox
      )
    ) {
      throw Error('form is undefined');
    }

    await userEvent.type(firstNameInput, 'testName');
    await userEvent.type(lastNameInput, 'testSurname');
    await userEvent.type(birthDayInput, '2022-11-29');
    await userEvent.selectOptions(countrySelect, 'Russia');

    const fakeFile = new File(['hello'], 'hello.png', { type: 'image/png' });
    await userEvent.upload(fileInput as HTMLInputElement, fakeFile);

    await userEvent.click(switchCheckbox);

    const fileInputFiles = (fileInput as HTMLInputElement).files;
    if (!fileInputFiles) {
      throw Error('fileInputFiles is null');
    }

    expect(firstNameInput).toHaveValue('testName');
    expect(lastNameInput).toHaveValue('testSurname');
    expect(birthDayInput).toHaveValue('2022-11-29');
    expect(
      (countrySelect as HTMLSelectElement).options[
        (countrySelect as HTMLSelectElement).selectedIndex
      ].value
    ).toEqual('Russia');

    expect(fileInputFiles[0].name).toBe('hello.png');
    expect(fileInputFiles.length).toBe(1);
    expect((switchCheckbox as HTMLInputElement).checked).toBeTruthy();

    const btnSend = document.querySelector('.form-btn');
    if (btnSend === null) {
      throw Error('btnSend is undefined');
    }
    expect(document.querySelector('.form-container')?.children.length).toEqual(0);
    await userEvent.click(btnSend);
    expect(document.querySelector('.form-container')?.children.length).toEqual(1);
    await userEvent.click(btnSend);
    expect(document.querySelector('.form-container')?.children.length).toEqual(1);
  });
});
