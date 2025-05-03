import {Component, inject, TemplateRef, ViewChild} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RouterLink} from "@angular/router";
import {MatButton} from "@angular/material/button";
import {LoadingService} from "../../services/loading.service";

@Component({
  selector: 'app-slow-loader',
  imports: [CommonModule, RouterLink, MatButton, NgOptimizedImage],
  templateUrl: './slow-loader.component.html',
  styleUrls: ['./slow-loader.component.scss']
})
export class SlowLoaderComponent {
  @ViewChild('customSpinner') customSpinner!: TemplateRef<any>;
  private loadingService = inject(LoadingService)
  async loadData() {
    try {
      console.log('Start: ', new Date());
      this.loadingService.loadingOn(this.customSpinner);
      await new Promise(resolve => setTimeout(resolve, 3000));
    } finally {
      console.log('End: ', new Date());
      this.loadingService.loadingOff();
    }
  }
}
