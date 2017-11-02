import React from 'react';

export default class ShoppingListItem extends React.Component {
	render() {
		return (
			<div className="item">
				<input type="checkbox" id={this.props.index} checked={this.props.item.status === "completed"}/>
      			<label htmlFor={this.props.index}>{this.props.item.name}</label>
			</div>
		)
	}
}