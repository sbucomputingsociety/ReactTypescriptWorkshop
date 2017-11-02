import * as React from 'react'
import {Pizza, SauceTypes, CheeseLevels, Meats, NonMeats, PizzaTypes} from './types'

interface EditablePizzaProps {
	addPizza: (pizza: Pizza) => void
}

interface EditablePizzaState {
	editing: boolean,
	pizza?: Pizza
}


console.log(Meats);

export default class EditablePizza extends React.Component<EditablePizzaProps, EditablePizzaState> {

	sauceSelect: HTMLSelectElement
	toppingsSelect: HTMLSelectElement
	cheeseSelect: HTMLSelectElement
	typeSelect: HTMLSelectElement

	constructor() {
		super();

		this.state = {
			editing: false,
		}
	}

	componentDidUpdate(prepProps: {}, prevState: EditablePizzaState) {
		if(this.state.editing === true && prevState.editing === false) {
			console.log("init");
			(window as any).$('select').material_select();
		} else if(this.state.editing === false && prevState.editing === true) {
			(window as any).$('select').material_select('destroy');
		}
	}

	startEditing = () => {
		this.setState({
			editing: true,
			pizza: {
				cheese: CheeseLevels.NORMAL,
				type: PizzaTypes.NORMAL,
				sauce: SauceTypes.TOMATO,
				toppings: []
			}
		})
	}

	addPizza = () => {
		let selectedToppings = (window as any).$(this.toppingsSelect).val();
		if(selectedToppings.length > 2) {
			window.alert("Too many toppings selected");
			return;
		}
		// console.log(this.typeSelect.value);
		// console.log((window as any).$(this.toppingsSelect).val());
		// console.log(this.cheeseSelect.value);
		// console.log(this.typeSelect.value);
		let type: PizzaTypes = (PizzaTypes as any)[this.typeSelect.value];
		let cheeseLevel: CheeseLevels = (CheeseLevels as any)[this.cheeseSelect.value];
		let sauce: SauceTypes = (SauceTypes as any)[this.sauceSelect.value];
		let toppings: (Meats|NonMeats)[] = selectedToppings.map((topping: string) => {
			if(topping in (Meats as any)) {
				return (Meats as any)[topping]
			} else if(topping in (NonMeats as any)) {
				return (NonMeats as any)[topping]
			}
		});

		let pizza: Pizza = {
			type: type,
			cheese: cheeseLevel,
			sauce: sauce,
			toppings: toppings
		}

		this.props.addPizza(pizza); 
		this.setState({
			editing: false,
			pizza: undefined
		})
	}

	render() {
		if(this.state.editing == false || this.state.pizza === undefined) {
			return (<div className=" col s12 m6 l4"><div className="pizza" key="editable">
				<div className="icon-wrapper"><i onClick={this.startEditing} className="material-icons">add_circle</i></div>
			</div></div>)
		}
		else {
			return (<div className=" col s12 m6 l4"><div className="pizza" key="editable">
				<img src="./img/pizza.jpg"/>
				<div className="input-field">
					<select ref={(select) => {this.typeSelect = select as HTMLSelectElement}}>
						{
							Object.keys(PizzaTypes).map((value) => {
								return <option value={value}>{(PizzaTypes as any)[value]}</option>
							})
						}
					</select>
					<label >Type</label>
				</div>
				<div className="input-field">
					<select ref={(select) => {this.sauceSelect = select as HTMLSelectElement}}>
						{
							Object.keys(SauceTypes).map((value) => {
								return <option value={value}>{(SauceTypes as any)[value]}</option>
							})
						}
					</select>
					<label>Sauce</label>
				</div>
				<div className="input-field">
					<select ref={(select) => {this.cheeseSelect = select as HTMLSelectElement}}>
						{
							Object.keys(CheeseLevels).map((value) => {
								return <option value={value}>{(CheeseLevels as any)[value]}</option>
							})
						}
					</select>
					<label>Cheese</label>
				</div> 
				<div className="input-field ">
					<select multiple ref={(select) => {this.toppingsSelect = select as HTMLSelectElement}}>
						<optgroup label="Meats">
							{
								Object.keys(Meats).map((topping) => {
									return <option value={topping}>{(Meats as any)[topping]}</option>
								})
							}
						</optgroup>
						<optgroup label="NonMeats">
							{
								Object.keys(NonMeats).map((topping) => {
									return <option value={topping}>{(NonMeats as any)[topping]}</option>
								})
							}
						</optgroup>
					</select>
					<label>Toppings</label>
				</div> 
				<div className="buttons">
					<a onClick={this.addPizza} className="waves-effect waves-light btn"><i className="material-icons left">done</i>Done</a>
				</div>
			</div></div>);
		}
	}
}