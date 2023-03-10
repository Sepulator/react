import { Card } from '../../components/card';
import React from 'react';
import data from '../../data/data.json';
import products from '../../data/products.json';

export class Home extends React.Component<{}, {}> {
  state = {
    text: '',
  };

  onInputSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    await this.setState({
      text: e.target.value,
    });
    localStorage.setItem('search-text', this.state.text);
  };

  componentDidMount() {
    const text = localStorage.getItem('search-text');
    if (text) {
      this.setState({
        text: text,
      });
    }
  }

  render() {
    const items = products.map((item) => <Card {...item} key={item.id}/>);

    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark mt-3 mb-5 shadow p-2 bg-color">
          <a className="navbar-brand" href="#">
            Products:
          </a>

          <form className="w-auto py-1 float-start search-input">
            <input
              type="search"
              className="form-control rounded-0"
              placeholder="Search"
              aria-label="Search"
              value={this.state.text}
              onInput={this.onInputSearch}
            />
          </form>
        </nav>
        <div className="text-center mb-2">
          <div className="row">{items}</div>
        </div>
      </>
    );
  }
}
