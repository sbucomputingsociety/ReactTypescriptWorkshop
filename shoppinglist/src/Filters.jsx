import React from 'react';

export default class Filters extends React.Component {
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