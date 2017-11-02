import * as React from 'react';
import ShoppingListItem from './ShoppingListItem'
import {Item} from './types'

interface ShopppingListProps {
	items: [Item]
}

export default class ShopppingList extends React.Component<ShopppingListProps, any> {
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