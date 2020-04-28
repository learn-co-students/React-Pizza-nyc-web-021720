import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

const pizzaUrl = 'http://localhost:3000/pizzas'
class App extends Component {
  state = {
    pizzas: [],
    selectedPizza: {}
  }

  componentDidMount(){
    fetch(pizzaUrl)
      .then(res => res.json())
      .then(data => this.setState({pizzas: data}))
  }
  
  editPizza = (pizzaId) =>{
    let chosenPizza = this.state.pizzas.find(pizza => pizza.id === pizzaId)
    this.setState({selectedPizza: chosenPizza})
  }

  handleForm = (event) =>{
    // console.log(event.target.name, event.target.value)
    this.setState({ selectedPizza: {...this.state.selectedPizza, [event.target.name]: event.target.value}})
  }

  updatePizza = ()=>{
    // console.log("we here")
    let id = this.state.selectedPizza.id
    if (this.state.selectedPizza.id){
      fetch(`${pizzaUrl}/${id}`,{
        method: "PATCH",
        headers: {
          "Content-Type": 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({...this.state.selectedPizza, vegetarian: this.state.selectedPizza.vegetarian === 'Vegetarian'})
      })
        .then(res => res.json())
        .then(newPizza =>{
          let newPizzas = this.state.pizzas.map(pizza => {
            if(pizza.id === newPizza.id){
              return newPizza
            }
            else{
              return pizza
            }
          })
          this.setState({pizzas: newPizzas, selectedPizza: {} })
        })
    }
    else{
      fetch(pizzaUrl,{
        method: "POST",
        headers: {
          "Content-Type": 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({...this.state.selectedPizza, vegetarian: this.state.selectedPizza.vegetarian === 'Vegetarian'})
      })
        .then(res => res.json())
        .then(newPizza =>{
          this.setState({pizzas: [...this.state.pizzas, newPizza], selectedPizza: {} })
        })
    }
  }

  render() {
    // console.log(this.state.selectedPizza)
    return (
      <Fragment>
        <Header/>
        <PizzaForm 
          selectedPizza={this.state.selectedPizza}
          handleForm={this.handleForm}
          updatePizza={this.updatePizza}
        />
        <PizzaList 
          pizzas={this.state.pizzas}
          editPizza={this.editPizza}
        />
      </Fragment>
    );
  }
}

export default App;
