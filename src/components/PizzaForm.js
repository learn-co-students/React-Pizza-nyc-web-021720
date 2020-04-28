import React from "react"

class PizzaForm extends React.Component{
  
  state = {
    formInput:'',
    size:"small",
    checked: true
  }

  handleForm = (event)=> {
    this.setState({
      formInput: event.target.value
    })
  }

  handleSize = (event) =>{
    
    this.setState({
      size: event.target.value
    })

  }

  createNew = () => {
    let temp = {
      topping: this.state.formInput,
      size: this.state.size,
      vegetarian: this.state.checked    
    }
    this.props.doPost(temp)
  }


  
  
  render(){

    return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" onChange={this.handleForm} className="form-control"  placeholder="Pizza Topping" value={
               this.state.formInput
              }/>
        </div>
        <div className="col">
          <select value={this.state.size} onChange={this.handleSize} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" checked={null}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" checked={null}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={this.createNew}>Submit</button>
        </div>
      </div>

  )
    
  }
  
}

export default PizzaForm
