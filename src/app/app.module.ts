import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconComponent } from './components/icon/icon.component';

//font-awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//toaster
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { DxCheckBoxModule, DxListModule, DxSelectBoxModule, DxTemplateModule, DxTreeViewModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    AppComponent,
    IconComponent,
    
  ],
  imports: [
    DxTreeViewModule,
    DxListModule,
    DxTemplateModule,
    DxCheckBoxModule,
    DxSelectBoxModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
