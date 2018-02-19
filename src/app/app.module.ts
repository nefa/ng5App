import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ServerComponent } from './server/server/server.component';
import { WarningAlertComponent } from './alerts/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './alerts/success-alert/success-alert.component';
import { ServersComponent } from './server/servers/servers.component';
import { RecepiesComponent } from './recepies/recepies.component';
import { RecepieListComponent } from './recepies/recepie-list/recepie-list.component';
import { RecepieDetailComponent } from './recepies/recepie-detail/recepie-detail.component';
import { RecepieItemComponent } from './recepies/recepie-list/recepie-item/recepie-item.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    ServersComponent,
    RecepiesComponent,
    RecepieListComponent,
    RecepieDetailComponent,
    RecepieItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
