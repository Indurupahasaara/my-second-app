import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class CommonInterceptor implements HttpInterceptor {

  constructor( private tostar:ToastrService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //check online status

    if(!window.navigator.onLine){
      this.tostar.warning('Message','You are Offline Please check internet connection')
    }
    if (request.url.includes('customer')) {
      // Set Custome Headerss To Http Request
      request = request.clone({
        setHeaders: {
          'content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Authorization': 'cjasdjkcnaocjnklmsalkjfa65465456asdkjhajiwdasc65165askdjhqwbasc65456872348723kjsndjkcsdcm65465asckbjkssdcsdc'
        }
      });
    }

    return next.handle(request).pipe(
      
      catchError((err: HttpErrorResponse) => {

        if (err.error instanceof ErrorEvent) {
          this.tostar.error('Server side Error occurred', 'Error');        
        } else {
          this.tostar.error(`Error occurred. Please contact Admin`, 'Error');                  
        }
        return throwError(null);

      })
    );

  }
}
