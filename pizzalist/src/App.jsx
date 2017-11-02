import React from 'react';
import PizzaList from './PizzaList'

const FILTER_ALL = "all";
const FILTER_COMPLETED = "completed";
const FILTER_PENDING = "pending";

export default class App extends React.Component {

	constructor() {
		super();
		this.state = {
			pizzas: [
				{
					type: "Handtossed",
					sauce: "Tomato",
					toppings: ["Pinapple", "Jalapeno"],
					cheese: "Normal"
				},
				{
					type: "Pan",
					sauce: "Tomato",
					toppings: ["Chicken", "Jalapeno"],
					cheese: "Normal"
				}
			],
		}
	}

	render () {
		return (
			<div className="wrapper">
				<div className="navbar">
					<div className="title"><i className="material-icons">local_pizza</i> Pizza Picker</div>
				</div>
				<PizzaList pizzas={this.state.pizzas}/>
			</div>
		)
	}
}