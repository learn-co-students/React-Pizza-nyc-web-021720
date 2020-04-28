import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  
  state = {
    pizzas:[]
  }
  componentDidMount(){
    fetch('http://localhost:3000/pizzas')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        pizzas:data
      })
    })

  }

  doPost = (obj) =>{
    let reqObj = {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
      body: JSON.stringify(obj)
    }

    fetch('http://localhost:3000/pizzas',reqObj)
    .then(resp => resp.json())
    .then(data =>{
      this.setState({
        pizzas: [...this.state.pizzas,data]
      })
    })
  }

  
  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm doPost={this.doPost}/>
        <PizzaList pizzas={this.state.pizzas}/>
      </Fragment>
    );
  }
}

export default App;
