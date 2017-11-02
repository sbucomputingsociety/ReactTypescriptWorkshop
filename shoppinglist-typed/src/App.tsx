import * as React from 'react';
import Filters from './Filters';
import ShoppingList from './ShoppingList'
import {Item, ItemStatus} from './types';

enum FilterState {
	COMPLETED="completed", PENDING="pending", ALL="all"
}

interface AppState {
	items: [Item],
	current_filter: FilterState
} 

export default class App extends React.Component<any, AppState> {

	constructor() {
		super();
		this.state = {
			items: [
				{
					name: "Sugar",
					status: ItemStatus.COMPLETED
				},
				{
					name: "Salt",
					status: ItemStatus.COMPLETED
				},
				{
					name: "Apples",
					status: ItemStatus.PENDING
				},
				{
					name: "Vegetable Oil",
					status: ItemStatus.PENDING
				}
			],
			current_filter: FilterState.ALL
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