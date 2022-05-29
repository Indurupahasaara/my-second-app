import { Component, OnInit } from '@angular/core';
import { Feature } from 'src/app/shared/interfaces/feature';

@Component({
  selector: 'app-featured-list',
  templateUrl: './featured-list.component.html',
  styleUrls: ['./featured-list.component.css'],
})
export class FeaturedListComponent implements OnInit {
  featureProducts: Feature[] = [];
  //cardColor: string = 'bg-warning';
  constructor() {}

  ngOnInit(): void {
    this.getFeatureProducts();
  }

  getFeatureProducts() {
    this.featureProducts = [
      {
        title: 'Bagna Cauda',
        imagePath:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT41hogjDP-VaOHFk8EK4MsQKSq9qL0m4lg3A&usqp=CAU',
        price: 330,
      },

      {
        title: 'Tortelli and Ravioli',
        imagePath:
          'https://www.sharp.com/health-news/images/Italian-Restaurant-Panel-HN817-Healthy-Eating-iStock-95825882-Sized.jpg',
        price: 600,
      },
      {
        title: 'Bagna Cauda',
        imagePath:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT41hogjDP-VaOHFk8EK4MsQKSq9qL0m4lg3A&usqp=CAU',
        price: 330,
      },

      {
        title: 'Tortelli and Ravioli',
        imagePath:
          'https://www.sharp.com/health-news/images/Italian-Restaurant-Panel-HN817-Healthy-Eating-iStock-95825882-Sized.jpg',
        price: 600,
      },
      {
        title: 'Bagna Cauda',
        imagePath:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT41hogjDP-VaOHFk8EK4MsQKSq9qL0m4lg3A&usqp=CAU',
        price: 330,
      },

      {
        title: 'Tortelli and Ravioli',
        imagePath:
          'https://www.sharp.com/health-news/images/Italian-Restaurant-Panel-HN817-Healthy-Eating-iStock-95825882-Sized.jpg',
        price: 600,
      },
      {
        title: 'Bagna Cauda',
        imagePath:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT41hogjDP-VaOHFk8EK4MsQKSq9qL0m4lg3A&usqp=CAU',
        price: 330,
      },

      {
        title: 'Tortelli and Ravioli',
        imagePath:
          'https://www.sharp.com/health-news/images/Italian-Restaurant-Panel-HN817-Healthy-Eating-iStock-95825882-Sized.jpg',
        price: 600,
      },

      // {
      //   title: 'Polenta',
      //   imagePath:
      //     'https://qph.fs.quoracdn.net/main-qimg-b39f36424bd6ceb6c117ef949915fbba',
      //   price: 180,
      // },

      // {
      //   title: 'Focaccia',
      //   imagePath:
      //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyeTgM4eYv5yHvRdyS1poq0rYrr2etiYGqvw&usqp=CAU',
      //   price: 480,
      // },

      // {
      //   title: 'Arancini',
      //   imagePath:
      //     'https://cdn.theculturetrip.com/wp-content/uploads/2017/05/nathans.jpg',
      //   price: 100,
      // },
    ];
  }

  getCardColor(price: number): string {
    let cardColor: string;

    // if (price > 500) {
    //   cardColor = 'bg-danger';
    // } else if (price > 180) {
    //   cardColor = 'bg-warning';
    // } else {
    //   cardColor = 'bg-white';
    // }

    cardColor = price > 400 ? 'bg-danger' : 'bg-warning';

    return cardColor;
  }
}
