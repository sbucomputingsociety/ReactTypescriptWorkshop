import React from 'react';
import ShoppingListItem from './ShoppingListItem'

export default class ShopppingList extends React.Component {
	render() {
		return <div className="list">
			{
				this.props.items.map((item, index) => {
					return <ShoppingListItem item={item} index={index}/>
				})
			}
		</div>
	}
}