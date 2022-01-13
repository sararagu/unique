import { NgModule } from '@angular/core';
import { Routes ,RouterModule} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PropertyComponent } from './property/property.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"About", component:AboutComponent },
  {path:"Contact", component:ContactComponent },
  {path:"Property", component:PropertyComponent},
  {path:"Home", component:HomeComponent},
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)],
    exports: [RouterModule]
   
})
export class AppRoutingModule { }
export const routingComponents = [AboutComponent,ContactComponent,PropertyComponent,HomeComponent]
