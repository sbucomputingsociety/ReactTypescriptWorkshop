import * as React from 'react';
import { Pizza } from './types'
import PizzaComponent from './Pizza';

interface PizzaListProps {
	pizzas: [Pizza]
}

export default class PizzaList extends React.Component<PizzaListProps, {}> {
	render() {
		return (
			<div className="pizza-list container">
				<div className="row">
					{
						this.props.pizzas.map(function(pizza, index) {
							return <PizzaComponent pizza={pizza} index={index}/>
						})
					}
				</div>
			</div>
		)
	}
}