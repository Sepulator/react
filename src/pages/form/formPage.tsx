import { CardForm, IFormResult } from '@/components/card-form/cardform';
import { Form } from '@/components/form/form';
import React from 'react';

type Props = {
  className?: string;
};

type State = {
  cardList: IFormResult[];
};

export class FormPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      cardList: [],
    };
  }

  generateCards = (card: IFormResult) => {
    this.setState({
      cardList: [...this.state.cardList, card],
    });
  };

  render() {
    const items = this.state.cardList.map((el, index) => <CardForm {...el} key={index} />);
    return (
      <>
        <Form generateCards={this.generateCards} />
        <div className="text-center mb-2">
          <div className="row">{items}</div>
        </div>
      </>
    );
  }
}
