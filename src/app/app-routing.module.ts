import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { FoodListComponent } from './food-list/food-list.component';

const routes: Routes = [
  {path: 'restaurants', component: RestaurantListComponent},
  {path: 'foods', component: FoodListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [RestaurantListComponent, FoodListComponent]