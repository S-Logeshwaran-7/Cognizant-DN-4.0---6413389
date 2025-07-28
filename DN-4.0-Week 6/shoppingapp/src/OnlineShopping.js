import React, { Component } from 'react';
import Cart from './Cart';

class OnlineShopping extends Component {
  constructor(props) {
    super(props);
    this.cartItems = [
      { itemname: 'Laptop', price: 80000 },
      { itemname: 'TV', price: 120000 },
      { itemname: 'Washing Machine', price: 50000 },
      { itemname: 'Mobile', price: 30000 },
      { itemname: 'Fridge', price: 70000 },
    ];
  }

  render() {
    return (
      <div className="shopping-container">
        <h2 style={{ color: 'green' }}>Items Ordered :</h2>
        <table className="cart-list">
          <thead>
            <tr>
              <th style={{ color: 'green' }}>Name</th>
              <th style={{ color: 'green' }}>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.cartItems.map((item, index) => (
              <Cart key={index} itemname={item.itemname} price={item.price} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  }

export default OnlineShopping;