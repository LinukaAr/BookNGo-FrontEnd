import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from './pages/events/events.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConfigurationFormComponent } from './pages/configuration-form/configuration-form.component';
import { ControlPanelComponent } from './pages/control-panel/control-panel.component';
import { LogDisplayComponent } from './pages/log-display/log-display.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component'; 
@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    ConfigurationFormComponent,
    ControlPanelComponent,
    LogDisplayComponent,
    AdminDashboardComponent,
    NavbarComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}