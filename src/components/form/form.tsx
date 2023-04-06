import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { CheckboxInput } from './checkboxinput/checkboxinput';
import { DateInput } from './dateinput/dateinput';
import { FileInput } from './fileinput/fileinput';
import { RadioInput } from './radioinput/radioinput';
import { SelectInput } from './selectinput/selectinut';
import { TextInput } from './textinput/textinput';
import { Toast } from '../toast/toast';
import { useAppDispatch } from '@/store/hooks';
import { addCard } from '@/store/cardsSlice';

export interface IFormInputs {
  file: File;
  text: string;
  date: string;
  select: string;
  radio: string;
  checkbox: string[];
}

export const Form = () => {
  const dispatch = useAppDispatch();
  const [toast, setToast] = useState(false);
  const [picture, setPicture] = useState(true);
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<IFormInputs>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<IFormInputs> = (data: IFormInputs) => {
    showToaster();
    const image = URL.createObjectURL(data.file);
    const { text, date, select, radio, checkbox } = data;
    setPicture(false);
    dispatch(addCard({ image, text, date, select, radio, checkbox }));
    reset();
  };

  const onReset = (e: React.FormEvent<HTMLFormElement>) => {
    reset();
    setPicture(false);
  };

  const showPicture = (show: boolean) => {
    setPicture(show);
  };

  const showToaster = () => {
    setToast(true);
    setTimeout(() => {
      setToast(false);
    }, 2500);
  };

  return (
    <>
      <div className="d-flex justify-content-center my-3">
        <div className="col-lg-5">
          <div className="card">
            <form action="" name="form" onSubmit={handleSubmit(onSubmit)} onReset={onReset}>
              <FileInput
                register={register}
                errors={errors}
                setValue={setValue}
                picture={picture}
                showPicture={showPicture}
              />
              <div className="card-body">
                <div className="row">
                  <TextInput register={register} errors={errors} />
                  <DateInput register={register} errors={errors} />
                  <SelectInput register={register} errors={errors} />
                  <RadioInput register={register} errors={errors} />
                  <CheckboxInput register={register} errors={errors} />
                </div>
              </div>
              <div className="d-flex justify-content-center card-footer border-0 bg-light py-3 text-end">
                {toast ? (
                  <Toast showToast={toast} />
                ) : (
                  <>
                    <button
                      type="submit"
                      className="btn btn-primary btn-rounded me-1"
                      data-testid="submit-button"
                    >
                      Submit
                    </button>
                    <button
                      type="reset"
                      className="btn btn-warning btn-rounded ms-1"
                      data-testid="reset-button"
                    >
                      Reset
                    </button>
                  </>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
