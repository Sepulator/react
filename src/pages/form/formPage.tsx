import { useState } from 'react';

import { Form } from '@/components/form/form';
import { CardForm, IFormResult } from '@/components/card-form/cardform';

export const FormPage = () => {
  const [cardList, setCardList] = useState<IFormResult[]>([]);

  const generateCards = (card: IFormResult) => {
    setCardList([...cardList, card]);
  };

  const items = cardList.map((el, index) => <CardForm {...el} key={index} />);
  return (
    <>
      <Form generateCards={generateCards} />
      <div className="text-center mb-2">
        <div className="row">{items}</div>
      </div>
    </>
  );
};
