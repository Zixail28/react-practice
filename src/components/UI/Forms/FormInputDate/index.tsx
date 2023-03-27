import React from "react";
import { IFormInputDateProps } from "../../../data/interfaces/IFormInputDateProps";

class FormInputDate extends React.Component<IFormInputDateProps> {
  constructor(props: IFormInputDateProps) {
    super(props);
  }
  render(): React.ReactNode {
    return (
      <input
        type={this.props.type}
        name={this.props.name}
        placeholder={this.props.placeholder}
        id={this.props.id}
        className={this.props.className}
        ref={this.props.setInputRef}
      />
    );
  }
}

export { FormInputDate };
