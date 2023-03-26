import { ICheckboxList } from '@/components/form/checkboxinput/checkboxinput';
import { IFormInputs } from '@/components/form/form';
import { IRadioList } from '@/components/form/radioinput/radioinput';
import { selectOptions } from '@/components/form/selectinput/selectinut';

export const validateFile = (file: React.RefObject<HTMLInputElement>) => {
  const { current } = file;
  if (current && current.files && current.files[0].type.split('/')[0] === 'image') return true;
  return false;
};

export const validateText = (text: React.RefObject<HTMLInputElement>) => {
  const regexp = /^[a-zA-Z0-9]{3,12}$/;
  const { current } = text;
  if (current && current.value && regexp.test(current.value)) return true;

  return false;
};

export const validateDate = (date: React.RefObject<HTMLInputElement>) => {
  const { current } = date;
  if (current && current.value && Date.parse(current.value) <= Date.now()) return true;
  return false;
};

export const validateSelect = (select: React.RefObject<HTMLSelectElement>) => {
  const { current } = select;
  if (current && current.value && selectOptions.includes(current.value)) return true;
  return false;
};

export const validateRadio = (radio: IRadioList) => {
  const checked = Object.values(radio).some((el) => el.current.checked === true);
  if (checked) return true;
  return false;
};

export const validateCheckbox = (checkbox: ICheckboxList) => {
  const checked = Object.values(checkbox).some((el) => el.current.checked === true);
  if (checked) return true;
  return false;
};

export const gatherFormInputs = (form: IFormInputs) => {
  const file = form.file.current!.files![0];
  const text = form.text.current!.value;
  const date = form.date.current!.value;
  const select = form.select.current!.value;
  const radio: string = Object.values(form.radio).find((el) => el.current.checked).current.value;
  const checkbox: string[] = Object.values(form.checkbox).reduce((prev, curr) => {
    if (curr.current.checked) prev.push(curr.current.value);
    return prev;
  }, []);
  return { file, text, date, select, radio, checkbox };
};
