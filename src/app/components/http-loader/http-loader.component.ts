import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {RouterLink} from "@angular/router";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-http-loader',
  imports: [CommonModule, RouterLink, MatButton],
  templateUrl: 'http-loader.component.html',
  styleUrls: ['http-loader.component.scss']
})
export class HttpLoaderComponent {
  private http = inject(HttpClient);
  message = '';

  loadFromServer() {
    this.http.get('https://jsonplaceholder.typicode.com/photos')
      .subscribe({
      next: (data: any) => {
        this.message = `${data?.length} Datos cargados`;
        console.log('Datos cargados:', data)
      },
      error: (error) => console.error('Error:', error)
    });
  }
}

