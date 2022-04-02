import { Component, OnInit } from '@angular/core';
declare let Plotly:any;
declare const d3:any;


@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})

export class DashboardComponent implements OnInit{
 
    ngOnInit(){
      function makeplot() {
        Plotly.d3.csv("https://raw.githubusercontent.com/rukmini-calsoft/data/main/CpuUsage.csv", function(data: string | any[]){ processData(data) } );
     };
   
     function processData(allRows: string | any[]) {
     
       console.log(allRows);
       var x = [], y = [];
     
       for (var i=0; i<allRows.length; i++) {
         const row = allRows[i];
         x.push( row['_time'] );
         y.push( row['_value'] );
       }
       console.log( 'X',x, 'Y',y);
       makePlotly( x, y );
     }
     
     function makePlotly( x: any[], y: any[]){
       var plotDiv = document.getElementById("plot");
       var traces = [{
         x: x, 
         y: y
       }];
     
       Plotly.newPlot('myDiv', traces, 
         //{title: 'LineGraph'}
         );
     };
       makeplot();
       d3.csv("https://raw.githubusercontent.com/rukmini-calsoft/data/main/Temprature.csv", function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}


var trace1 = {
  type: "scatter",
  mode: "lines",
  name: 'High',
  x: unpack(rows, '_time'),
  y: unpack(rows, '_value'),
  line: {color: 'cyan'}
}

var trace2 = {
  type: "scatter",
  mode: "lines",
  name: 'Low',
  x: unpack(rows, '_time'),
  y: unpack(rows, '_value'),
  line: {color: '#007db8'}
}

var data = [trace1,trace2];

var layout = {
  title: '',
  xaxis: {
    autorange: true,
    range: ['2022-02-07', '2022-02-08'],
    rangeselector: {buttons: [
        {
          count: 1,
          label: '1d',
          step: 'day',
          stepmode: 'backward'
        },
        {
          count: 6,
          label: '2d',
          step: 'day',
          stepmode: 'backward'
        },
        {step: 'all'}
      ]},
    rangeslider: {range: ['2022-02-07', '2022-02-07']},
    type: 'date'
  },
  yaxis: {
    autorange: true,
    range: [86.8700008333, 138.870004167],
    type: 'linear'
  }
};

Plotly.newPlot('multi', data, layout);
})
    

d3.csv("https://raw.githubusercontent.com/rukmini-calsoft/data/main/AggregateUsage.csv", function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}


var trace1 = {
  x: unpack(rows, '_time'),
  y: unpack(rows, '_value'),
  line: {color: '#17BECF'},
  type: 'bar'
}

var data = [trace1];

var layout = {
  title: ''
}
Plotly.newPlot('bar', data, layout);
})
    }
    
   
}

