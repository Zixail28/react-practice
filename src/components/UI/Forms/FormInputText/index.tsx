import React from "react";
import { IFormInputTextProps } from "../../../data/interfaces/IFormInputTextProps";

class FormInputText extends React.Component<IFormInputTextProps> {
  constructor(props: IFormInputTextProps) {
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

export { FormInputText };
