import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {

  render() {
    const{pizza,handleEdit}=this.props
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            //render Pizza here
            pizza.map(allPizza => <Pizza key={allPizza.id} pizzas={allPizza} handleEdit={handleEdit}/>)
          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
