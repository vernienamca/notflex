import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { retry, catchError, map } from 'rxjs/operators';
import { CommonFunctions } from "src/app/shared/functions/common-functions";

@Injectable({
    providedIn: 'root'
})
export class BaseApi {
    constructor(private _http: HttpClient) { }

    public get<T>(url: string, options?: any): Observable<any> {
        return this._http.get<T>(url, options)
            .pipe(
                retry(1),
                catchError(CommonFunctions.httpErrorHandler)
            );
    }

    public post<T>(url: string, data: any, options?: any): Observable<any> {
        return this._http.post<T>(url, data, options)
          .pipe(
            map(result => result),
            catchError(CommonFunctions.httpErrorHandler)
          );
    }

    public put<T>(url: string, data: any, options?: any): Observable<any> {
        return this._http.put<T>(url, data, options)
            .pipe(
            catchError(CommonFunctions.httpErrorHandler)
            );
    }
        
    public delete<T>(url: string, options?: any): Observable<any> {
        return this._http.delete<T>(url, options)
          .pipe(
            catchError(CommonFunctions.httpErrorHandler)
          );
    }
}