import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationFormComponent } from './pages/configuration-form/configuration-form.component';
import { EventsComponent } from './pages/events/events.component';
import { ControlPanelComponent } from './pages/control-panel/control-panel.component';
import { LogDisplayComponent } from './pages/log-display/log-display.component';

const routes: Routes = [
  { path: 'config', component: ConfigurationFormComponent },
  { path: 'ticket-display', component: EventsComponent },
  { path: 'control-panel', component: ControlPanelComponent },
  { path: 'log-display', component: LogDisplayComponent },
  { path: '', redirectTo: '/config', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }