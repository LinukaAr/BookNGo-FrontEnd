import { Component } from '@angular/core';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent {
  start() {
    console.log('Start button clicked');
    // Implement start logic
  }

  stop() {
    console.log('Stop button clicked');
    // Implement stop logic
  }
}