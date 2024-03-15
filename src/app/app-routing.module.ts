import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MovieListComponent } from "./core/movie-list/movie-list.component";

const routes: Routes = [
  { path: "", component: MovieListComponent },
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
