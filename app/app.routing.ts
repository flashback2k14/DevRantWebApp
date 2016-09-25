// Modules
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule} from "@angular/router";
// Components
import { RantsComponent } from "./components/rants/rants.component";
import { RantComponent } from "./components/rant/rant.component";
import { ProfileComponent } from "./components/profile/profile.component";

// define routes Object
const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "/rants",
    pathMatch: "full"
  },
  {
    path: "rants",
    component: RantsComponent
  },
  {
    path: "rant/:id",
    component: RantComponent
  },
  {
    path: "profile/:id",
    component: ProfileComponent
  }
];

// export routing Object
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
