import { Component, OnInit } from "@angular/core";
import { LoadingIndicator } from "nativescript-loading-indicator";
import { User } from "../../models/user";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { Page } from "ui/page";
import { AccountProvider } from "../../services/account.provider"
import * as platformModule from "tns-core-modules/platform";

// additional components
import { registerElement } from "nativescript-angular";
registerElement("Gradient", () => require("nativescript-gradient").Gradient);

@Component({
  selector: "app-login",
  moduleId: module.id,
  templateUrl: "login.component.html",
})

export class LoginComponent implements OnInit {

  email: string;
  password: string;

  marginTop () {
    if (platformModule.isIOS) {
      if (platformModule.screen.mainScreen.heightDIPs == 812) {
        return -44; // iphoneX
      }
      return -20; // normal ios
    }
    return 0;
  }

  ngOnInit () {
    // hides actionbar for Android
    this.page.actionBarHidden = true
    this.email = 'yinsee@gmail.com';
    this.password = 'abc123';
  }

  constructor(private params: ModalDialogParams, private page: Page, private account: AccountProvider) {
  }

  signup () {
    alert('Take you to signup page')
  }

  login () {
    var loader = new LoadingIndicator();
    loader.show();
    this.account.login(this.email, this.password)
      .then(() => {
        loader.hide();
        this.params.closeCallback();
      })
  }

  close () {
    this.params.closeCallback();
  }

  forgotpassword () {
    alert('Take you to reset password page')
  }
}
