import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { FoodListComponent } from './food-list/food-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/restaurants', pathMatch: 'full' },
  {path: 'restaurants', component: RestaurantListComponent},
  {path: 'foods', component: FoodListComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [RestaurantListComponent, 
                                  FoodListComponent,
                                  PageNotFoundComponent]