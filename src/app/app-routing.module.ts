import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChangeNumberComponent } from "./components/change-number/change-number.component";
import { ItemDetailComponent } from "./components/item-detail/item-detail.component";
import { ListRenderComponent } from "./components/list-render/list-render.component";


const Routes: Routes = [
    //{path: '', component: ChangeNumberComponent},
    {path: '', component:ListRenderComponent }, 
    {path : 'list/:id', component: ItemDetailComponent}
    
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(Routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }