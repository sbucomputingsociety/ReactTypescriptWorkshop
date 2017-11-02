import * as React from 'react';
import { Pizza } from './types';

interface PizzaComponentProps  {
	pizza: Pizza,
	index: number
}

export default class PizzaComponent extends React.Component<PizzaComponentProps, {}> {

	render() {
		return (<div className="pizza col s12 m4 l3">
			<img src="./img/pizza.jpg"/>
			<div className="input-field">
				<input disabled value={this.props.pizza.type} id={"pizza-"+this.props.index+"-type"}/>
				<label className="active" htmlFor={"pizza-"+this.props.index+"-type"}>Type</label>
			</div>
			<div className="input-field">
				<input disabled value={this.props.pizza.sauce} id={"pizza-"+this.props.index+"-sauce"}/>
				<label className="active" htmlFor={"pizza-"+this.props.index+"-sauce"}>Sauce</label>
			</div>
			<div className="input-field">
				<input disabled value={this.props.pizza.cheese} id={"pizza-"+this.props.index+"-cheese"}/>
				<label className="active" htmlFor={"pizza-"+this.props.index+"-cheese"}>Cheese</label>
			</div> 
			<div className="input-field ">
				<input disabled value={this.props.pizza.toppings.join(", ")} id={"pizza-"+this.props.index+"-toppings"}/>
				<label className="active" htmlFor={"pizza-"+this.props.index+"-toppings"}>Sauce</label>
			</div> 
		</div>);
	}
}