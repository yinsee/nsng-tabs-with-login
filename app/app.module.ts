import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
// enable routing
import { NativeScriptRouterModule } from "nativescript-angular/router";
// enable data binding
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { AppComponent } from "./app.component";
import { routes, navigatableComponents } from "./app.routing";

// providers
import { AccountProvider } from "./services/account.provider"


@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes)
  ],

  declarations: [
    AppComponent,
    ...navigatableComponents
  ],

  // prepare singleton
  providers: [
    AccountProvider
  ],

  bootstrap: [AppComponent],

})

export class AppModule { }

