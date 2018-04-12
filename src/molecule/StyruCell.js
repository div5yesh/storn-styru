import { h, render, Component } from 'preact';

export default class StyruCell extends Component{
	render(props, state) {
		return (
			<div class="styru-cell" style={{ "display": "table-cell" }}>
				{props.row}{props.col} - {props.data}
			</div>
		);
	}
}