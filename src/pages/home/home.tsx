import { Card } from '../../components/card/card';
import React from 'react';
import products from '../../data/products.json';

type State = {
  text: string;
};

type Props = {
  className?: string;
};

export class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  getLocalStorage() {
    const value = localStorage.getItem('search-text');
    if (value) this.setState({ text: value });
  }

  saveToLocalStorage() {
    localStorage.setItem('search-text', this.state.text);
  }

  onInputSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    await this.setState({
      text: e.target.value,
    });
  };

  componentDidMount() {
    this.getLocalStorage();
    window.addEventListener('beforeunload', this.saveToLocalStorage.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.saveToLocalStorage.bind(this));
    this.saveToLocalStorage();
  }

  render() {
    const items = products.map((item) => <Card {...item} key={item.id} />);

    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark mt-3 mb-3 shadow p-2 bg-color">
          <div className="input-group w-auto py-1">
            <div className="bg-light">
              <input
                type="search"
                className="form-control rounded-0"
                placeholder="Search"
                value={this.state.text}
                onInput={this.onInputSearch}
              />
            </div>
            <button id="search-button" type="button" className="btn btn-primary">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </nav>
        <div className="text-center mb-2">
          <div className="row">{items}</div>
        </div>
      </>
    );
  }
}
