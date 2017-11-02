import * as React from 'react';
import Pizza from './Pizza';

export default class PizzaList extends React.Component {
	render() {
		return (
			<div className="pizza-list container">
				<div className="row">
					{
						this.props.pizzas.map(function(pizza) {
							return <Pizza pizza={pizza}/>
						})
					}
				</div>
			</div>
		)
	}
}