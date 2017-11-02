import * as React from 'react';
import { Pizza } from './types'
import PizzaComponent from './Pizza';
import EditablePizza from './EditablePizza'	

interface PizzaListProps {
	pizzas: [Pizza],
	addPizza: (pizza: Pizza) => void
	removePizza: (index: number) => void
}

export default class PizzaList extends React.Component<PizzaListProps, {}> {
	render() {
		return (
			<div className="pizza-list container">
				<div className="row">
					{
						this.props.pizzas.map((pizza, index) => {
							console.log(index);
							return <div key={"" + index}><PizzaComponent pizza={pizza} index={index} removePizza={this.props.removePizza}/></div>
						})
					}
					<EditablePizza addPizza={this.props.addPizza}/>
				</div>
			</div>
		)
	}
}