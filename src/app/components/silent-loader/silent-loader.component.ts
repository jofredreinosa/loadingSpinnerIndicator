import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient, HttpContext} from '@angular/common/http';
import {RouterLink} from "@angular/router";
import {MatButton} from "@angular/material/button";
import {NoLoading} from "../../interceptors/loading.interceptor";

@Component({
  selector: 'app-silent-loader',
  imports: [CommonModule, RouterLink, MatButton],
  templateUrl: 'silent-loader.component.html' ,
  styleUrls: ['silent-loader.component.scss']
})
export class SilentLoaderComponent {
  private http = inject(HttpClient);
  message = '';

  loadSilently() {
    this.http.get('https://jsonplaceholder.typicode.com/comments' , {
      context: new HttpContext().set(NoLoading, true),
    })
      .subscribe({
      next: (data: any) => {
        this.message = `${data?.length} Comentarios cargados`;
        console.log('Datos silenciosos:', data)
      },
      error: (error) => console.error('Error:', error)
    });
  }
}
