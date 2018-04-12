import { h, render, Component } from 'preact';
import StyruRow from 'molecule/StyruRow';

export default class StyruTable extends Component{
	render(props, state) {

		let rows = [];
		for (let i = 0; i < props.dimen.row; i++){
			rows[i] = <StyruRow row={i} {...props} data={props.data[i]}/>;
		}

		return (
			<div style={{"display":"table"}}>
				{rows}
			</div>
		);
	}
}