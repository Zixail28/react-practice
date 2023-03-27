import React from "react";
import { IFormCheckboxProps } from "../../../data/interfaces/IFormCheckboxProps";

class FormInputCheckbox extends React.Component<IFormCheckboxProps> {
  render(): React.ReactNode {
    return (
      <>
        <input type="checkbox" ref={this.props.setInputRef} />
        <span className="slider round"></span>
      </>
    );
  }
}

export { FormInputCheckbox };
