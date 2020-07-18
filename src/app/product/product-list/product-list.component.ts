import { Component, ValueProvider } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
    productTitle: string = 'Lista de Productos';
    imagewidth:number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter:string = '';
    products:any[] = [
      {
        "productId": 1,
        "productName": "Polerón Hombre (DOO AUSTRALIA)",
        "description": "60% Algodón, 40% Poliéster",
        "createDate": "July 6, 2020",
        "price": 67.96,
        "rating": 3.8,
        "imageUrl": "https://falabella.scene7.com/is/image/FalabellaPE/881674963_1?wid=1004&hei=1500&crop=248,0,1004,1500&qlt=70",
    },
    {
        "productId": 2,
        "productName": "Casaca Hombre (BEARCLIFF)",
        "description": "100% Poliamida",
        "createDate": "July 7, 2020",
        "price": 51,
        "rating": 4.6,
        "imageUrl": "https://falabella.scene7.com/is/image/FalabellaPE/881791137_1?wid=1500&hei=1500&qlt=70",
      },
      {
        "productId": 3,
        "productName": "Casaca Mujer (BASEMENT)",
        "description": "100% Poliéster",
        "createDate": "April 23, 2020",
        "price": 99.5,
        "rating": 4.3,
        "imageUrl": "https://falabella.scene7.com/is/image/FalabellaPE/881776767_1?wid=1500&hei=1500&qlt=70",
      },
      {
        "productId": 4,
        "productName": "Abrigo Mujer (BASEMENT)",
        "description": "60% Poliéster, 34% Lana, 3% Acrílico, 2% Poliamida, 1% Viscosa",
        "createDate": "Febrary 15, 2020",
        "price": 102.23,
        "rating": 3.2,
        "imageUrl": "https://falabella.scene7.com/is/image/FalabellaPE/881777079_1?wid=1500&hei=1500&qlt=70",
      }
    ];

      ShowImage():void
      {
        this.showImage = !this.showImage;
      }
}
