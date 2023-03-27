import React from "react";
import { IFormInputFileProps } from "../../../data/interfaces/IFormInputFileProps";

class FormInputFile extends React.Component<IFormInputFileProps, { text: string }> {
  constructor(props: IFormInputFileProps) {
    super(props);
    this.handlerChange = this.handlerChange.bind(this);
    this.state = {
      text: "Choose file",
    };
  }

  handlerChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files![0];
    this.setState({
      text: file.name,
    });
  }

  render(): React.ReactNode {
    return (
      <>
        <input
          onChange={this.handlerChange}
          type={this.props.type}
          name={this.props.name}
          placeholder={this.props.placeholder}
          id={this.props.id}
          className={this.props.className}
          ref={this.props.setInputRef}
        />
        <span className="input-span">{this.state.text}</span>
      </>
    );
  }
}

export { FormInputFile };
