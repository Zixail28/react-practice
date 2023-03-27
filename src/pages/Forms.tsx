import React from 'react';
import './Forms.css';
import { FormContainer } from '../components/UI/Forms/FormContainer';
import { FormSelect } from '../components/UI/Forms/FormSelect';
import { FormInputText } from '../components/UI/Forms/FormInputText';
import { FormInputDate } from '../components/UI/Forms/FormInputDate';
import { FormInputFile } from '../components/UI/Forms/FormInputFile';
import { FormInputCheckbox } from '../components/UI/Forms/FormInputCheckbox';

import { IFormContainerDataItem } from 'components/data/interfaces/IFormContainerDataItem';

interface IFormsState {
  data: IFormContainerDataItem[];
  agree: boolean | null;
  firstName: string | null;
  surName: string | null;
  birthDay: string | null;
  country: string | null;
  file: string | null;
}
type formProps = Record<string, never>;

const countriesForSelect = ['USA', 'Russia', 'China', 'Belarus'];

class Forms extends React.Component<formProps, IFormsState> {
  firstName: React.RefObject<HTMLInputElement>;
  surName: React.RefObject<HTMLInputElement>;
  birthDay: React.RefObject<HTMLInputElement>;
  country: React.RefObject<HTMLSelectElement>;
  file: React.RefObject<HTMLInputElement>;
  checkbox: React.RefObject<HTMLInputElement>;

  constructor(props: formProps) {
    super(props);
    if (!localStorage.getItem('formContainer')) {
      localStorage.setItem('formContainer', JSON.stringify([]));
    }
    this.state = {
      data: JSON.parse(localStorage.getItem('formContainer')!) || [],
      agree: null,
      firstName: null,
      surName: null,
      birthDay: null,
      country: null,
      file: null,
    };
    this.firstName = React.createRef();
    this.surName = React.createRef();
    this.birthDay = React.createRef();
    this.country = React.createRef();
    this.file = React.createRef();
    this.checkbox = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const dataForm = {
      firstName: this.firstName.current!.value,
      surName: this.surName.current!.value,
      birthDay: this.birthDay.current!.value,
      country: this.country.current!.value,
      file: this.file.current!.files![0] ? this.file.current!.files![0].name : '',
      checkbox: this.checkbox.current!.checked,
      date: new Date().toDateString(),
      time: new Date().toTimeString().slice(0, 8),
    };
    if (this.validation(dataForm)) {
      this.setState({
        data: [...this.state.data, dataForm],
        agree: null,
        firstName: null,
        surName: null,
        birthDay: null,
        country: null,
        file: null,
      });
      this.firstName.current!.value = '';
      this.surName.current!.value = '';
      this.birthDay.current!.value = '';
      this.checkbox.current!.checked = false;

      localStorage.setItem(
        'formContainer',
        JSON.stringify([...JSON.parse(localStorage.getItem('formContainer')!), dataForm])
      );
    } else {
      this.setState((state: IFormsState) => {
        return {
          ...state,
          agree: dataForm.checkbox,
          firstName: dataForm.firstName,
          surName: dataForm.surName,
          birthDay: dataForm.birthDay,
          country: dataForm.country,
          file: dataForm.file,
        };
      });
    }
  }
  validation(dataForm: IFormContainerDataItem): boolean {
    if (!dataForm.checkbox) {
      return false;
    }
    if (dataForm.firstName === '') {
      return false;
    }
    if (dataForm.surName === '') {
      return false;
    }
    if (dataForm.birthDay === '') {
      return false;
    }
    if (dataForm.file === '') {
      return false;
    }
    return true;
  }

  componentDidMount(): void {
    const formContainer = localStorage.getItem('formContainer');
    if (formContainer) {
      this.setState({ data: JSON.parse(formContainer) });
    }
  }

  render() {
    return (
      <div className="containter">
        <form action="" className="form-box" onSubmit={this.handleSubmit}>
          <label htmlFor="firstName">
            <>
              Name:{' '}
              {this.state.firstName !== null && this.state.firstName.length === 0 && (
                <span className="error-text">*you need a write name</span>
              )}
            </>
            <FormInputText
              type="text"
              placeholder="Name"
              name="firstName"
              id="firstName"
              setInputRef={this.firstName}
            />
          </label>
          <label htmlFor="lastName">
            <>
              Surname:{' '}
              {this.state.surName !== null && this.state.surName.length === 0 && (
                <span className="error-text">*you need a write surname</span>
              )}
            </>
            <FormInputText
              type="text"
              placeholder="Surname"
              name="lastName"
              id="lastName"
              setInputRef={this.surName}
            />
          </label>
          <label htmlFor="birthDay">
            <>
              Birth Day:{' '}
              {this.state.birthDay !== null && this.state.birthDay.length === 0 && (
                <span className="error-text">*you need a write name</span>
              )}
            </>
            <FormInputDate
              type="date"
              placeholder="birthDay"
              name="birthDay"
              className="birthDay-input"
              setInputRef={this.birthDay}
            />
          </label>
          <label className="county-label">
            Country:
            <FormSelect countries={countriesForSelect} setInputRef={this.country} />
          </label>
          <label htmlFor="file" className="input-file">
            <>
              Choose file:{' '}
              {this.state.firstName !== null && this.state.firstName.length === 0 && (
                <span className="error-text">*you need a write name</span>
              )}
            </>
            <FormInputFile type="file" name="file" id="file" setInputRef={this.file} />
          </label>
          <label className="switch">
            <p>
              <>
                You agree?{' '}
                {this.state.agree !== null && this.state.agree === false && (
                  <span className="error-text">*you need a agree</span>
                )}
              </>
            </p>
            <FormInputCheckbox setInputRef={this.checkbox} />
          </label>
          {/* <input type="submit" className="form-btn" value="Send" /> */}
          <button className="form-btn" type="submit">
            Send
          </button>
        </form>
        <FormContainer data={this.state.data} />
      </div>
    );
  }
}

export { Forms };
