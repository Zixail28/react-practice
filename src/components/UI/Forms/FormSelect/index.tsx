import React from "react";
import { IFormSelectProps } from "../../../data/interfaces/IFormSelectProps";
import "./FormSelect.css";

export class FormSelect extends React.Component<IFormSelectProps> {
  constructor(props: IFormSelectProps) {
    super(props);
  }

  render() {
    return (
      <select className="select-county" ref={this.props.setInputRef}>
        <option disabled>Choose country</option>
        {this.props.countries.map((item, i) => {
          return (
            <option value={item} key={i}>
              {item}
            </option>
          );
        })}
      </select>
    );
  }
}
