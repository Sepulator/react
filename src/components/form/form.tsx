import React from 'react';

import {
  gatherFormInputs,
  validateCheckbox,
  validateDate,
  validateFile,
  validateRadio,
  validateSelect,
  validateText,
} from '@/helpers/validateform';
import { CheckboxInput, ICheckboxList } from './checkboxinput/checkboxinput';
import { DateInput } from './dateinput/dateinput';
import { FileInput } from './fileinput/fileinput';
import { IRadioList, RadioInput } from './radioinput/radioinput';
import { SelectInput } from './selectinput/selectinut';
import { TextInput } from './textinput/textinput';
import { IFormResult } from '../card-form/cardform';

interface Props {
  className?: string;
  generateCards: (card: IFormResult) => void;
}

export interface IFormInputs {
  file: React.RefObject<HTMLInputElement>;
  text: React.RefObject<HTMLInputElement>;
  date: React.RefObject<HTMLInputElement>;
  select: React.RefObject<HTMLSelectElement>;
  radio: IRadioList;
  checkbox: ICheckboxList;
  form: React.RefObject<HTMLFormElement>;
}

interface IValidInputs {
  file: boolean;
  text: boolean;
  date: boolean;
  select: boolean;
  radio: boolean;
  checkbox: boolean;
}

interface State {
  validation: IValidInputs;
}

export class Form extends React.Component<Props, State> {
  form: IFormInputs;
  constructor(props: Props) {
    super(props);
    this.form = {
      file: React.createRef(),
      text: React.createRef(),
      date: React.createRef(),
      select: React.createRef(),
      radio: {
        promo1: React.createRef(),
        promo2: React.createRef(),
        promo3: React.createRef(),
      },
      checkbox: {
        exclusive: React.createRef(),
        arrival: React.createRef(),
        best: React.createRef(),
      },
      form: React.createRef(),
    };
    this.state = {
      validation: {
        file: true,
        text: true,
        date: true,
        select: true,
        radio: true,
        checkbox: true,
      },
    };
  }

  validateInputs = async () => {
    const validation = {
      file: validateFile(this.form.file),
      text: validateText(this.form.text),
      date: validateDate(this.form.date),
      select: validateSelect(this.form.select),
      radio: validateRadio(this.form.radio),
      checkbox: validateCheckbox(this.form.checkbox),
    };
    this.setState({
      validation: validation,
    });
  };

  async onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await this.validateInputs();
    const validForm = Object.values(this.state.validation).every((el) => el);
    if (validForm) {
      const result = await gatherFormInputs(this.form);
      this.props.generateCards(result);
      this.form.form.current?.reset();
    }
  }

  onReset(e: React.FormEvent<HTMLFormElement>) {
    this.form.file.current!.value = '';

    this.setState({
      validation: {
        file: true,
        text: true,
        date: true,
        select: true,
        radio: true,
        checkbox: true,
      },
    });
  }

  render() {
    return (
      <div className="d-flex justify-content-center my-3">
        <div className="col-lg-5">
          <div className="card">
            <form
              action=""
              ref={this.form.form}
              onSubmit={(e) => this.onSubmit(e)}
              onReset={(e) => this.onReset(e)}
            >
              <FileInput file={this.form.file} validate={this.state.validation.file} />
              <div className="card-body">
                <div className="row">
                  <TextInput text={this.form.text} validate={this.state.validation.text} />
                  <DateInput date={this.form.date} validate={this.state.validation.date} />
                  <SelectInput select={this.form.select} validate={this.state.validation.select} />
                  <RadioInput radio={this.form.radio} validate={this.state.validation.radio} />
                  <CheckboxInput
                    checkbox={this.form.checkbox}
                    validate={this.state.validation.checkbox}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-center card-footer border-0 bg-light py-3 text-end">
                <button type="submit" className="btn btn-primary btn-rounded me-1">
                  Submit
                </button>
                <button type="reset" className="btn btn-warning btn-rounded ms-1">
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
