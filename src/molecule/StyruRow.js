import { h, render, Component } from 'preact';
import StyruCell from 'molecule/StyruCell';

export default class StyruRow extends Component{

	render(props, state) {

		let cols = [];
		for (let i = 0; i < props.dimen.col; i++){
			cols[i] = <StyruCell col={i} {...props} data={props.data[i]}/>;
		}

		return (
			<div class="styru-row" style={{ "display": "table-row" }}>
				{cols}
			</div>
		);
	}
}