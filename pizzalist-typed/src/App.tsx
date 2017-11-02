import * as React from 'react';
import PizzaList from './PizzaList'
import {Pizza, SauceTypes, CheeseLevels, Meats, NonMeats, PizzaTypes} from './types'

const FILTER_ALL = "all";
const FILTER_COMPLETED = "completed";
const FILTER_PENDING = "pending";

interface AppState {
	pizzas: [Pizza]
}

export default class App extends React.Component<{}, AppState> {

	constructor() {
		super();
		this.state = {
			pizzas: [
				{
					type: PizzaTypes.NORMAL,
					sauce: SauceTypes.TOMATO,
					toppings: [NonMeats.PINEAPPLE, NonMeats.JALAPENO],
					cheese: CheeseLevels.NORMAL
				},
				{
					type: PizzaTypes.PAN,
					sauce: SauceTypes.TOMATO,
					toppings: [Meats.CHICKEN, NonMeats.JALAPENO],
					cheese: CheeseLevels.NORMAL
				}
			],
		}
	}

	addPizza = (pizza: Pizza) => {
		let pizzas = this.state.pizzas;
		pizzas.push(pizza);	

		this.setState({
			pizzas: pizzas
		});
		this.forceUpdate();
	}

	removePizza = (index: number) => {
		if(index < this.state.pizzas.length) {
			let pizzas = this.state.pizzas;
			pizzas.splice(index, 1);
			this.setState({
				pizzas: pizzas
			});
		}
	}

	render () {
		return (
			<div className="wrapper">
				<div className="navbar">
					<div className="title"><i className="material-icons">local_pizza</i> Pizza Picker</div>
				</div>
				<PizzaList pizzas={this.state.pizzas} addPizza={this.addPizza} removePizza={this.removePizza}/>
			</div>
		)
	}
}