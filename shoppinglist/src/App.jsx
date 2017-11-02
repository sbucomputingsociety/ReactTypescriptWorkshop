import React from 'react';
import Filters from './Filters';
import ShoppingList from './ShoppingList'

const FILTER_ALL = "all";
const FILTER_COMPLETED = "completed";
const FILTER_PENDING = "pending";

export default class App extends React.Component {

	constructor() {
		super();
		this.state = {
			items: [
				{
					name: "Sugar",
					status: "completed"
				},
				{
					name: "Salt",
					status: "completed"
				},
				{
					name: "Apples",
					status: "Pending"
				},
				{
					name: "Vegetable Oil",
					status: "Pending"
				}
			],
			current_filter: 'all'
		}
	}
	render () {
		return (
			<div className="Wrapper">
				<div className="navbar">
					<div className="title"><i className="material-icons">shopping_cart</i> Shopping List</div>
					<Filters/>
				</div>
				<ShoppingList items={this.state.items}/>
			</div>
		)
	}
}