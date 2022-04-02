import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { TableComponent }           from '../../pages/table/table.component';
import { LineChartComponent } from '../../pages/line_chart/line-chart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DropDownListAllModule, MultiSelectModule,ComboBoxModule } from '@syncfusion/ej2-angular-dropdowns';
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';
import {TextBoxModule,NumericTextBoxAllModule} from '@syncfusion/ej2-angular-inputs';
//import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { GridAllModule } from '@syncfusion/ej2-angular-grids';
import { DatePickerAllModule } from '@syncfusion/ej2-angular-calendars';
import { DatePickerModule, DateTimePickerModule, DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';
@NgModule({
  imports: [
    CommonModule,
    DateTimePickerModule,
    DatePickerAllModule,
    DatePickerModule,
    DateRangePickerModule,
    FormsModule,
    DropDownListAllModule, MultiSelectModule,ComboBoxModule,ToolbarModule,GridAllModule,TextBoxModule,NumericTextBoxAllModule,
    ReactiveFormsModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule
   
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    DashboardComponent,
    TableComponent,
    LineChartComponent
  ]
})

export class AdminLayoutModule {}
