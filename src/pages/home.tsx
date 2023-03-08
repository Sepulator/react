import { Card } from '../components/card';
import React from 'react';
import { Product } from 'data/type';
import data from '../data/data.json';

export class Home extends React.Component<Product, {}> {
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
    return (
      <div className="container">
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
        <div className="text-center">
          <Card {...data} />
        </div>
      </div>
    );
  }
}
