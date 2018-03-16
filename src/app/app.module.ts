import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//services
import {ServersServiceService} from './services/servers-service.service';
import { WesternUnionService } from './services/western-union.service';
import { FormBasicService } from './services/form-basic.service';

//components
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server/server.component';
import { WarningAlertComponent } from './alerts/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './alerts/success-alert/success-alert.component';
import { ServersComponent } from './server/servers/servers.component';
import { RecepiesComponent } from './recepies/recepies.component';
import { RecepieListComponent } from './recepies/recepie-list/recepie-list.component';
import { RecepieDetailComponent } from './recepies/recepie-detail/recepie-detail.component';
import { RecepieItemComponent } from './recepies/recepie-list/recepie-item/recepie-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { HeaderComponent } from './header/header.component';
import { ErrorAlertComponent } from './alerts/error-alert/error-alert.component';
import { ReactctiveSimpleFormComponent } from './forms/reactctive-simple-form/reactctive-simple-form.component';
import { ReceiveMoneyComponent } from './western-union/receive-money/receive-money.component';


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
    ShoppingListComponent,
    ShoppingEditComponent,
    HeaderComponent,
    ErrorAlertComponent,
    ReactctiveSimpleFormComponent,
    ReceiveMoneyComponent
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule ],
  providers: [ServersServiceService, WesternUnionService, FormBasicService],
  bootstrap: [AppComponent]
})
export class AppModule {}
