import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

const API='http://localhost:3000/pizzas'
class App extends Component {
  state={
    pizzas:[],
    currentPizza:{
      id:null,
      size:"",
      vegetarian:false,
      topping:""
    }
  }


componentDidMount(){
  fetch(API)
  .then(resp => resp.json())
  .then(pizzas => {
    this.setState({ 
      pizzas: pizzas
    })
  })
}

handleEdit=(pizza)=>{
  this.setState({
    currentPizza: pizza
  })
}

handleName=(event)=>{
  this.setState({
    currentPizza:{...this.state.currentPizza,
      topping: event.target.value}
  })
}

handleSize=(event) => {
  this.setState({
    currentPizza:{...this.state.currentPizza,
    size:event.target.value}
  })
}

handleVege=(event)=>{
    if (event.target.value==="Vegetarian"){
      this.setState({
        currentPizza: {...this.state.currentPizza, 
          vegetarian: true}
      })
    }else{
      this.setState({
        currentPizza: {...this.state.currentPizza, 
          vegetarian: false}
      })
    }
}

updatePizza=()=>{
  const id =this.state.currentPizza.id

  fetch(`http://localhost:3000/pizzas/${id}`,{
    method: "PATCH",
    headers: {'accept': 'application/json',
    'content-type': 'application/json'
      },
    body: JSON.stringify({
      topping: this.state.currentPizza.topping,
      vegetarian: this.state.currentPizza.vegetarian,
      size: this.state.currentPizza.size
    })
   })
   .then(resp=>resp.json())
   .then(pizza =>{
     let newPizzas=this.state.pizzas.map(p=>{
       if(p.id===pizza.id){
         return pizza
       }else{
         return p 
       }
     })
     this.setState({pizzas: newPizzas})
   })
}



  render() {
    // console.log(this.state.pizza)
    return (
      <Fragment>
        <Header/>
        <PizzaForm 
        currentPizza={this.state.currentPizza}
        handleName={this.handleName} 
        handleVege={this.handleVege}
        handleSize={this.handleSize}
        updatePizza={this.updatePizza}
        />

        <PizzaList 
        pizza={this.state.pizzas} 
        handleEdit={this.handleEdit}/>
      </Fragment>
    );
  }
}

export default App;
