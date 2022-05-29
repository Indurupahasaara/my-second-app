import { Component, OnInit,OnDestroy } from '@angular/core';
import {Observable, Subscription } from 'rxjs';
import {filter,map} from 'rxjs/operators';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit,OnDestroy {

 subscription!: Subscription;
 orderStatus!:any;

 orderStatusObs!:Observable<any>;

  myObservavle = new Observable((observer) => {
    console.log('Observavle starts..');
    observer.next('a')
    observer.next('ab')
    observer.next('abc')
    
  });

  myObservavle2: Observable<any> = new Observable((observer) => {
    console.log('Observavle starts..');
    setTimeout(() => {observer.next(1)},1000);
    setTimeout(() => {observer.next(2)},2000);
    setTimeout(() => {observer.next(3)},3000);
    // setTimeout(() => {observer.error('Erors')},3500);
    setTimeout(() => {observer.next(4)},4000);    
    setTimeout(() => {observer.next(5)},5000);
    setTimeout(() => {observer.complete()},6500);
    
  }).pipe( //usage of operators
    filter((data:any) => {
      return data > 2;
    }),
    map((data:any) => {
      return data * 3
    })
  );


  constructor() { }


  

  ngOnInit(): void {
    // this.subscription = this.myObservavle.subscribe(
    //   val => { console.log(val);
    //    },
    //    error => {
    //      console.log("Error occured");         
    //    },
    //    () => {
    //      console.log("Completed");
         
    //    }
    // )

    // this.myObservavle2.subscribe(
    //   val => {console.log(val);
    //   },
    //   error => {
    //     console.log("Error");
        
    //   }
    // )

    this.subscription = this.myObservavle2.subscribe(
      val => {console.log(val);
      },
      error => {
        console.log("Error");
        
      }
    )

    this.initOrderStatus();
  }


  initOrderStatus(){
    this.orderStatusObs = new Observable(observer => {
      setTimeout(() => {observer.next('In progress')},2000);
      setTimeout(() => {observer.next('Processing')},4000);
      setTimeout(() => {observer.next('Completed')},6000);
    });

   this.subscription =  this.orderStatusObs.subscribe(value => {
      this.orderStatus = value;
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  }


