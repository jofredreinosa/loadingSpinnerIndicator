import {Component, inject} from '@angular/core';
import {LoadingService} from "../../services/loading.service";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {NgTemplateOutlet} from "@angular/common";

@Component({
  selector: 'app-spinner',
  imports: [
    MatProgressSpinnerModule,
    NgTemplateOutlet,
  ],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss'
})
export class SpinnerComponent {
  private loadingService = inject(LoadingService);
  customSpinner = this.loadingService.customSpinner;
  spinner = this.loadingService.spinner;
}
