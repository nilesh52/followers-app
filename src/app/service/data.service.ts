import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe, throwError } from '../../../node_modules/rxjs';
import { AppError } from './../common/app-error';
import { catchError, map } from 'rxjs/operators';

// @Injectable({
//     providedIn: 'root'
// })
export class DataService {

    constructor(private url: string, private http: HttpClient) { }

    getAll() {
        return this.http.get(this.url)
            .pipe(
                map(response => response),
                catchError(this.handleError)
            );
    }

    create(resource) {
        return this.http.post(this.url, JSON.stringify(resource))
            .pipe(
                map(response => response),
                catchError(this.handleError)
            );
    }

    update(resource) {
        return this.http.put(this.url + '/' + resource.id, JSON.stringify(resource))
            .pipe(
                map(response => response),
                catchError(this.handleError)
            );
    }

    delete(id) {
        return this.http.delete(this.url + '/' + id)
            .pipe(
                map(response => response),
                catchError(this.handleError));
    }

    private handleError(error: Response) {
        if (error.status === 404) {
            return throwError(new NotFoundError());
        } else if (error.status === 400) {
            return throwError(new BadInput(error));
        } else {
            return throwError(new AppError(error));
        }
    }
}
