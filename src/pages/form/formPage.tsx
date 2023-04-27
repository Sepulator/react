import { useAppSelector } from '@/store/hooks';

import { Form } from '@/components/form/form';
import { CardForm } from '@/components/card-form/cardform';

export const FormPage = () => {
  const cards = useAppSelector((state) => state.cards);
  const items = cards.map((el, index) => <CardForm {...el} key={index} />);
  return (
    <>
      <Form />
      <div className="text-center mb-2">
        <div className="row">{items}</div>
      </div>
    </>
  );
};
