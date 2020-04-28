import React from "react"

const PizzaForm = (props) => {
  const {id, topping, size, vegetarian } = props.selectedPizza
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" name="topping" placeholder="Pizza Topping" value={topping? topping : ''} onChange={props.handleForm}/>
        </div>
        <div className="col">
          <select className="form-control" name="size" value={size? size : ''} onChange={props.handleForm}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" checked={vegetarian === "Vegetarian"} name="vegetarian" onChange={props.handleForm}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" checked={vegetarian === "Not Vegetarian"} name="vegetarian" onChange={props.handleForm} />
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={props.updatePizza}>{id ?"Edit Pizza": "Create Pizza"}</button>
        </div>
      </div>

  )
}

export default PizzaForm
