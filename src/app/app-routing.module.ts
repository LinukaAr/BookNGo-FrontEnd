import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/services/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { EventsComponent } from './pages/events/events.component';

const routes: Routes = [
  {
    path: '',
    component: EventsComponent
  },
  {
    path: 'home',
    component: EventsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  // {
  //   path: 'layout',
  //   component: LayoutComponent,
  //   canActivate: [AuthGuard],
  //   children: [
  //     {
  //       path: 'tickets',
  //       component: EventsComponent
  //     },
  //     {
  //       path: 'department',
  //       component: DepartmentComponent
  //     },
  //     {
  //       path: 'leaves',
  //       component: LeavesComponent
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }