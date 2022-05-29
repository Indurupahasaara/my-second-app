import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../shared/interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productList: Product[] = [];

  constructor(private httpClient: HttpClient) {}

  getData(): Product[] {
    const productList: Product[] = [
      {
        id: 1,
        title: 'Ribollita',
        description:
          'Some quick example text to build on the card title and make up the bulk of the card content.',
        imagePath:
          'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/styles/full/public/low-carb_portobello_pizzas_.jpg?itok=XYOVml5U',
        price: 550,
        availableQty: 38,
      },
      {
        id: 2,
        title: 'Italic Toast',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
        imagePath:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT41hogjDP-VaOHFk8EK4MsQKSq9qL0m4lg3A&usqp=CAU',
        price: 1200,
        availableQty: 100,
      },
      {
        id: 3,
        title: 'Risotto',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
        imagePath:
          'https://media.glide.mailplus.co.uk/prod/images/950_633/gm-a92dd327-54a6-498d-bc68-b5be85ad8308-2.jpg',
        price: 220,
        availableQty: 65,
      },
      {
        id: 4,
        title: 'Gnocchi',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
        imagePath:
          'https://media.glamourmagazine.co.uk/photos/613891bb5ebdbf876576ac88/16:9/w_2560%2Cc_limit/gettyimages-1203819139_sf.jpg',
        price: 300,
        availableQty: 12,
      },

      {
        id: 6,
        title: 'Lasagne',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
        imagePath:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT41hogjDP-VaOHFk8EK4MsQKSq9qL0m4lg3A&usqp=CAU',
        price: 1200,
        availableQty: 100,
      },
      // {
      //   id: 7,
      //   title: 'Gelato',
      //   description:
      //     "Some quick example text to build on the card title and make up the bulk of the card's content.",
      //   imagePath:
      //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyeTgM4eYv5yHvRdyS1poq0rYrr2etiYGqvw&usqp=CAU',
      //   price: 220,
      //   availableQty: 65,
      // },
      {
        id: 1,
        title: 'Ribollita',
        description:
          'Some quick example text to build on the card title and make up the bulk of the card content.',
        imagePath:
          'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/styles/full/public/low-carb_portobello_pizzas_.jpg?itok=XYOVml5U',
        price: 550,
        availableQty: 38,
      },
      {
        id: 2,
        title: 'Italic Toast',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
        imagePath:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT41hogjDP-VaOHFk8EK4MsQKSq9qL0m4lg3A&usqp=CAU',
        price: 1200,
        availableQty: 100,
      },
      {
        id: 3,
        title: 'Risotto',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
        imagePath:
          'https://media.glide.mailplus.co.uk/prod/images/950_633/gm-a92dd327-54a6-498d-bc68-b5be85ad8308-2.jpg',
        price: 220,
        availableQty: 65,
      },
      {
        id: 4,
        title: 'Gnocchi',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
        imagePath:
          'https://media.glamourmagazine.co.uk/photos/613891bb5ebdbf876576ac88/16:9/w_2560%2Cc_limit/gettyimages-1203819139_sf.jpg',
        price: 300,
        availableQty: 12,
      },

      {
        id: 6,
        title: 'Lasagne',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
        imagePath:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT41hogjDP-VaOHFk8EK4MsQKSq9qL0m4lg3A&usqp=CAU',
        price: 1200,
        availableQty: 100,
      },
      {
        id: 4,
        title: 'Gnocchi',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
        imagePath:
          'https://media.glamourmagazine.co.uk/photos/613891bb5ebdbf876576ac88/16:9/w_2560%2Cc_limit/gettyimages-1203819139_sf.jpg',
        price: 300,
        availableQty: 12,
      },

      {
        id: 6,
        title: 'Lasagne',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
        imagePath:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT41hogjDP-VaOHFk8EK4MsQKSq9qL0m4lg3A&usqp=CAU',
        price: 1200,
        availableQty: 100,
      },
      // {
      //   id: 7,
      //   title: 'Gelato',
      //   description:
      //     "Some quick example text to build on the card title and make up the bulk of the card's content.",
      //   imagePath:
      //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyeTgM4eYv5yHvRdyS1poq0rYrr2etiYGqvw&usqp=CAU',
      //   price: 220,
      //   availableQty: 65,
      // },
      // {
      //   id: 8,
      //   title: 'Prosciutto di Parma',
      //   description:
      //     "Some quick example text to build on the card title and make up the bulk of the card's content.",
      //   imagePath:
      //     'https://cdn.theculturetrip.com/wp-content/uploads/2017/05/nathans.jpg',
      //   price: 300,
      //   availableQty: 12,
      // },
      // {
      //   id: 5,
      //   title: 'Pesto alla Genovese',
      //   description:
      //     'Some quick example text to build on the card title and make up the bulk of the card content.',
      //   imagePath:
      //     'https://qph.fs.quoracdn.net/main-qimg-b39f36424bd6ceb6c117ef949915fbba',
      //   price: 550,
      //   availableQty: 38,
      // },
    ];
    return productList;
  }

  getPostList(): Observable<any> {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
  }
}
