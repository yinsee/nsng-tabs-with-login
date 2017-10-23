import { MainComponent } from "./pages/main/main.component";
import { LoginComponent } from "./pages/login/login.component";
import { NewsfeedComponent } from "./pages/newsfeed/newsfeed.component";
import { SettingsComponent } from "./pages/settings/settings.component";
import { StayComponent } from "./pages/stay/stay.component";
import { ExploreComponent } from "./pages/explore/explore.component";
import { ShareComponent } from "./pages/share/share.component";

export const routes = [
  { path: "login", component: LoginComponent },
  { path: "", component: MainComponent }
];

export const navigatableComponents = [
  LoginComponent,
  MainComponent,
  NewsfeedComponent,
  StayComponent,
  ShareComponent,
  ExploreComponent,
  SettingsComponent,
];
