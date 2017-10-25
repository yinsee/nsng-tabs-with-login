import { MainComponent } from "./pages/main/main.component";
import { LoginComponent } from "./pages/login/login.component";
import { NewsfeedComponent } from "./pages/newsfeed/newsfeed.component";
import { SettingsComponent } from "./pages/settings/settings.component";
import { StayComponent } from "./pages/stay/stay.component";
import { ExploreComponent } from "./pages/explore/explore.component";
import { ShareComponent } from "./pages/share/share.component";
import { NewsfeedDetailComponent } from "./pages/newsfeed/newsfeed.detail.component";

export const routes = [
  { path: "", redirectTo: "/main/(tab0:newsfeed//tab1:stay//tab2:share//tab3:explore//tab4:settings)", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  {
    path: "main", component: MainComponent, children: [
      { path: "newsfeed", component: NewsfeedComponent, outlet: "tab0" },
      { path: "newsfeed/:id", component: NewsfeedDetailComponent, outlet: "tab0" },
      { path: "stay", component: StayComponent, outlet: "tab1" },
      { path: "share", component: ShareComponent, outlet: "tab2" },
      { path: "explore", component: ExploreComponent, outlet: "tab3" },
      { path: "settings", component: SettingsComponent, outlet: "tab4" },
    ]
  }
];

export const navigatableComponents = [
  LoginComponent,
  MainComponent,
  NewsfeedComponent,
  NewsfeedDetailComponent,
  StayComponent,
  ShareComponent,
  ExploreComponent,
  SettingsComponent,
];
