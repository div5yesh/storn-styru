import { h, render, Component } from 'preact';
import StyruTable from 'organism/StyruTable';
import config from 'config/config.json';

class Styru{
    constructor(parent = document.body){
		console.log("Styru Init");
		this.parent = parent;
	}

	getStyruConfig(config) {
		const dimen = config.dimen.split(/\[x|X]/),
			row = Number(dimen[0]) | 3,
			col = Number(dimen[1]) | 3;
		
		return { dimen: { row, col } };
	}
	
	render(config, data) {
		let styruConfig = this.getStyruConfig(config);
		render(<StyruTable {...styruConfig} data={data}/>, this.parent);
	}
}

let _styru = new Styru();
_styru.render(config, [[1,2,3,4],[5,6,7],[8,9],[10,11,12,13]]);

global._styru = _styru;