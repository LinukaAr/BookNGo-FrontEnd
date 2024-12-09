import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { EventsComponent } from './pages/events/events.component';

const routes: Routes = [
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'events', component: EventsComponent },
  { path: '', redirectTo: '/admin', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}