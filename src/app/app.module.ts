import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from './pages/events/events.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MyCarouselComponent } from './shared/widgets/my-carousel/my-carousel.component';
import { MyButtonComponent } from './shared/widgets/my-button/my-button.component';
import { AuthGuard } from './core/services/auth.guard';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ConfigurationFormComponent } from './pages/configuration-form/configuration-form.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { WebSocketService } from './services/websocket.service';
import { ControlPanelComponent } from './pages/control-panel/control-panel.component';
import { LogDisplayComponent } from './pages/log-display/log-display.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    LoginComponent,
    MyCarouselComponent,
    MyButtonComponent,
    NavbarComponent,
    ConfigurationFormComponent,
    AdminDashboardComponent,
    ControlPanelComponent,
    LogDisplayComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    WebSocketService    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
