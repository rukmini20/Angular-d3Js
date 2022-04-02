import { Component, OnInit } from '@angular/core';
declare const Plotly:any;
declare const d3:any;
import { HttpClient } from '@angular/common/http';
import {
  MultiSelectComponent,
  MultiSelectChangeEventArgs
} from "@syncfusion/ej2-angular-dropdowns";
import { Observable, fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";
import * as moment from "moment";
@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html',
    styleUrls: ['table.component.css']
})

export class TableComponent implements OnInit{
idrac:any;
metric:any;
selectedLevel:any;
selectedMetric:any;
host:any;
csvdata:any;
measurement: any;
measurements:any;
ds
mm
dv
meas: any;
data;
mte;
public start = "";
public end = "";
startDate;
endDate;
  constructor(private http:HttpClient) {
    this.idracsList();
    this.metricList();
   // this.csvData(this.selectedLevel,this.mte,this.selectedMetric);
    this.onOptionsSelected();
    this.onOptionsSelectedMeasurement();
 
  }
  idracsList(){
    this.http.get('http://100.67.30.48:8080/v1/idracs').subscribe((data:any) =>
     this.idrac = data
    )}
  metricList(){
    this.http.get('http://100.67.30.48:8080/v1/metrics').subscribe((data:any) => {
    this.metric = data;
    
    for (this.ds of this.metric.measurements ) {
      this.mm = this.ds.metrics
      this.dv = this.ds.measurement
  } 
  });
 
}
    
  changeMetric(count) {
  this.measurement = this.metric.measurements.find(con => con.metrics == count).measurement;
  this.mte = count
  console.log("mm",this.mte);
}
getDater(e){
 // console.log("dd:",e);
  this.start = e[0]
  this.end =e[1];
  let datestart = this.start.toString();
  this.startDate = moment(datestart).format("YYYY-MM-DD");
  this.startDate =  this.startDate + 'T00:00:00Z';
   console.log("start",this.startDate)
    let dateend = this.end.toString();
    this.endDate = moment(dateend).format("YYYY-MM-DD");
    this.endDate = this.endDate + 'T00:00:00Z';
    console.log("end",this.endDate)
    this.csvData(this.selectedLevel,this.mte,this.selectedMetric,this.startDate,this.endDate);
}
onOptionsSelected() {
  this.csvData(this.selectedLevel,this.mte,this.selectedMetric,this.startDate,this.endDate);
}
onOptionsSelectedMeasurement() {
   console.log("measurement",this.selectedMetric);
   this.csvData(this.selectedLevel,this.mte,this.selectedMetric,this.startDate,this.endDate);
}
changeMeasuremnet(e){
//console.log("e::",e);
}

 csvData(host,metric,measurement,start,end) {
    console.log("this::",host,metric,measurement,start,end);
    if(host==null || measurement==null || metric==null || start==null || end==null){
      return

    }
    
    
    const body = { "bucket": "telegraf",
        "measurement":[measurement],
        "metricreport": metric,
        "host": host,
        "start":start,"stop":end};
        this.http.post('http://100.67.30.48:8080/v1/idracs/metrics', body).subscribe((data:any) =>{
         this.host = data.csv
         //console.log("data::",this.host);
         
         d3.csv(this.host, function(err, rows){
      
          function unpack(rows, key) {
          return rows.map(function(row) 
          { 
            return row[key]; 
          
          });
          //console.log(rows);
        }
       
        //  console.log("ele",element)
        var trace1 = {
          x: unpack(rows, '_time'),
          y: unpack(rows, measurement),
          line: {color: '#17BECF'},
          type: 'line'
        }
        
        var data = [trace1];
        
        var layout = {
          title: ''
        }
        Plotly.newPlot('bar', data, layout);
        })
      })
   }
        ngOnInit(){
        
          }
          
        }
