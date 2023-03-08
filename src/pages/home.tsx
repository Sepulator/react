import { Card } from '../components/card';
import React from 'react';
import { Product } from 'data/type';
import data from '../data/data.json'

type Props = {
  className?: string;
};

export class Home extends React.Component<Product, {}> {
  state = {
    count: 0,
  };

  onBtnClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

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
            />
          </form>
        </nav>
        <div className='text-center'>
          <Card  {...data}/>
        </div>
      </div>
    );
  }
}
