import * as React from 'react';

let toppings = {
	meat: [
		"Pepperoni", "Beef", "Ham", "Salami", "Italian Sausage", "Philly Steak", "Bacon", "Chicken"
	],
	nonMmeats: [
		"Cheddar Cheese",
		"Shredded Parmesan Asiago",
		"Banana Peppers",
		"Garlic",
		"Jalapeno Peppers",
		"Pineapple",
		"Roasted Red Peppers",
		"Diced Tomatoes",
		"Feta Cheese",
		"Shredded Provolone Cheese",
		"Black Olives",
		"Green Peppers",
		"Mushrooms",
		"Onions",
		"Spinach",
		"Hot Sauce"
	]
}

export default class Pizza extends React.Component {

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