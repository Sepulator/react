import React from 'react';
import { CheckboxInput, ICheckboxList } from './checkboxinput/checkboxinput';
import { DateInput } from './dateinput/dateinput';
import { FileInput } from './fileinput/fileinput';
import { IRadioList, RadioInput } from './radioinput/radioinput';
import { SelectInput } from './selectinput/selectinut';
import { TextInput } from './textinput/textinput';

interface Props {
  className: string;
}

interface FormInputs {
  file: React.RefObject<HTMLInputElement>;
  text: React.RefObject<HTMLInputElement>;
  date: React.RefObject<HTMLInputElement>;
  select: React.RefObject<HTMLSelectElement>;
  radio: IRadioList;
  checkbox: ICheckboxList;
}

interface FormValidate {
  text: boolean;
  date: boolean;
}

export class Form extends React.Component<Props> {
  form: FormInputs;
  validate: FormValidate;
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
    };
    this.validate = {
      text: true,
      date: true,
    };
  }

  onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(this.form.text.current?.value);
  }
  render() {
    return (
      <div className="d-flex justify-content-center my-3">
        <div className="col-lg-5">
          <div className="card">
            <form action="" onSubmit={(e) => this.onSubmit(e)}>
              <FileInput file={this.form.file} />
              <div className="card-body">
                <div className="row">
                  <TextInput text={this.form.text} validate={this.validate.text} />
                  <DateInput date={this.form.date} validate={this.validate.date} />
                  <SelectInput select={this.form.select} />
                  <RadioInput radio={this.form.radio} />
                  <CheckboxInput checkbox={this.form.checkbox} />
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
