import * as React from 'react';

export default class Filters extends React.Component<any, any> {
	render() {
		return (
			<div className="filters">
				<a className="filter" href="#">All</a>
				<a className="filter" href="#">Completed</a>
				<a className="filter" href="#">Pending</a>
			</div>
		)
	}
}