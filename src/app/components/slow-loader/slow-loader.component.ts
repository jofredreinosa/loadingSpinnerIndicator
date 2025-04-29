import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from "@angular/router";
import {MatButton} from "@angular/material/button";
import {LoadingService} from "../../services/loading.service";

@Component({
  selector: 'app-slow-loader',
  imports: [CommonModule, RouterLink, MatButton],
  templateUrl: './slow-loader.component.html',
  styleUrls: ['./slow-loader.component.scss']
})
export class SlowLoaderComponent {
  private loadingService = inject(LoadingService)
  async loadData() {
    try {
      console.log('Start: ', new Date());
      this.loadingService.loadingOn();
      await new Promise(resolve => setTimeout(resolve, 3000));
    } finally {
      console.log('End: ', new Date());
      this.loadingService.loadingOff();
    }
  }
}
