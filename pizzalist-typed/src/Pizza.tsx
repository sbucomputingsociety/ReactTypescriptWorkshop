import * as React from 'react';
import { Pizza } from './types';

interface PizzaComponentProps  {
	pizza: Pizza,
	index: number,
	removePizza: (index: number) => void
}

export default class PizzaComponent extends React.Component<PizzaComponentProps, {}> {
	removePizza = () => {
		this.props.removePizza(this.props.index);
	}

	render() {
		return (
			<div className=" col s12 m6 l4">
				<div className="pizza" key={"" + this.props.index}>
					<i onClick={this.removePizza} className="material-icons icon-close">close</i>
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
				</div>
			</div>
		);
	}
}