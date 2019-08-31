import style from './style.css';
import dc from 'dc';
import crossfilter from 'crossfilter2';
import * as d3 from 'd3';
import data from './payment-data.js';
import dcCSS from 'dc/dc.css';
import print_filter from './print-filter.js';

function setUpDOM() {
    const h1 = document.createElement('h1');
    h1.innerHTML = 'Bar Charts: payments by type';

    const theDiv = document.createElement('div');
    theDiv.setAttribute('id', 'chart');
    
    document.body.prepend(h1, theDiv);
    document.title = 'Bar Chart';
}

function barChart() {
    setUpDOM();
    
    const facts = crossfilter(data);
    const typeDimension = facts.dimension(d => d.type);
    const typeGroup = typeDimension.group();

    dc.barChart('#chart')
	.dimension(typeDimension)
	.group(typeGroup)
	.x(d3.scaleOrdinal().domain(
	    Array.from(typeGroup).map(d => d.key)
	))
	.xUnits(dc.units.ordinal);

    dc.renderAll();
}

export default barChart;

