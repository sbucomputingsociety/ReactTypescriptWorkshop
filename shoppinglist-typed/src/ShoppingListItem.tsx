import * as React from 'react';
import { Item, ItemStatus} from './types'

interface ShoppingListItemProps {
	item: Item,
	index: number
}

export default class ShoppingListItem extends React.Component<ShoppingListItemProps, any> {
	render() {
		return (
			<div className="item">
				<input type="checkbox" id={String(this.props.index)} checked={this.props.item.status === "completed"}/>
      			<label htmlFor={String(this.props.index)}>{this.props.item.name}</label>
			</div>
		)
	}
}