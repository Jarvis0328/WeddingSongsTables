import { Routes } from "@angular/router";
import { SongDetailComponent } from "./song-detail/song-detail.component";
import { HomeComponent } from "./home/home.component";

export const routes: Routes = [
  { path: "song/:id", component: SongDetailComponent },
  { path: "home", component: HomeComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "**", redirectTo: "home" },
];
