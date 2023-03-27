import "./FormContain.css";
import React from "react";
import { IFormContain } from "../../../data/interfaces/IFormContain";

const FormContain = (props: IFormContain) => {
  return (
    <div className="form-contain">
      <span className="span-lastName">
        <p className="p-text">First name:</p>
        <p className="p-firstName value">{props.pFirstNameValue}</p>
      </span>
      <span className="span-surName">
        <p className="p-text">Surname:</p>
        <p className="p-surName value">{props.pSurNameValue}</p>
      </span>
      <span className="span-birthDay">
        <p className="p-text">Birthday:</p>
        <p className=" p-birthDay value">{props.pBirthdayValue}</p>
      </span>
      <span className="span-county">
        <p className="p-text">County:</p>
        <p className="p-county value">{props.pCountryValue}</p>
      </span>
      <span className="span-file">
        <p className="p-text">File:</p>
        <p className="p-file value">{props.pFileValue}</p>
      </span>
      <br />
      <span className="span-time">
        <p className="p-text">sent to:</p>
        <p className="p-time value">{props.pDate + " " + props.pTime}</p>
      </span>
    </div>
  );
};

export { FormContain };
