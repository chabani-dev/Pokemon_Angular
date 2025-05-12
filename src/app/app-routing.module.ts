import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { SingleComponent } from "./single/single.component";
import { EditComponent } from "./edit/edit.component";
import { AddComponent } from "./add/add.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "single/:id",
    component: SingleComponent,
  },
  {
    path: "add",
    component: AddComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
