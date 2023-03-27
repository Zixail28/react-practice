import React from 'react';
import { FormContain } from '../../../../components/UI/Forms/FormContain';

import { IFormContainerDataItem } from '../../../../components/data/interfaces/IFormContainerDataItem';

interface IFormConteinerProps {
  data: IFormContainerDataItem[];
}

class FormContainer extends React.Component<IFormConteinerProps> {
  constructor(props: IFormConteinerProps) {
    super(props);
  }

  name() {
    const newArr = [];
    for (let i = this.props.data.length - 1; i >= 0; i--) {
      newArr.push(this.props.data[i]);
    }
    return newArr;
  }

  render() {
    return (
      <div className="form-container">
        {this.name().map((item: IFormContainerDataItem, i) => (
          <FormContain
            key={i}
            pFirstNameValue={item.firstName}
            pSurNameValue={item.surName}
            pBirthdayValue={item.birthDay}
            pCountryValue={item.country}
            pFileValue={item.file}
            pDate={item.date}
            pTime={item.time}
          />
        ))}
      </div>
    );
  }
}

export { FormContainer };
