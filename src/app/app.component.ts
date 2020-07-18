import { Component } from '@angular/core';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `<div class="container">
  <h1>{{pageTitle}}</h1>
  <app-product-list></app-product-list>
  </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Gestión de Productos';
}
