import style from './style.css';
import dc from 'dc';
import crossfilter from 'crossfilter2';
import * as d3 from 'd3';
import data from './payment-data.js';
import dcCSS from 'dc/dc.css';
import print_filter from './print-filter.js';

function barChart() {
    const facts = crossfilter(data);

    print_filter(facts);
}

export default barChart;

