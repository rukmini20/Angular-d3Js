import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
//import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HttpClientModule } from "@angular/common/http";
import { DatePickerAllModule } from '@syncfusion/ej2-angular-calendars';
import { DatePickerModule, DateTimePickerModule, DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropDownListAllModule, MultiSelectModule,ComboBoxModule } from '@syncfusion/ej2-angular-dropdowns';
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';
import {TextBoxModule,NumericTextBoxAllModule} from '@syncfusion/ej2-angular-inputs';
//import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { GridAllModule } from '@syncfusion/ej2-angular-grids';
@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
   // MatAutocompleteModule
   HttpClientModule,
   DateTimePickerModule,
   DatePickerAllModule,
   DatePickerModule,
   DateRangePickerModule,
   DropDownListAllModule, MultiSelectModule,ComboBoxModule,ToolbarModule,GridAllModule,TextBoxModule,NumericTextBoxAllModule,
   FormsModule,
   ReactiveFormsModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
