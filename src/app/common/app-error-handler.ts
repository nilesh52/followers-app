import { ErrorHandler } from '../../../node_modules/@angular/core';

export class AppErrorHandler implements ErrorHandler {
    handleError(errors) {
        alert('An Unexpected Error Occures !');
        console.log(errors);
    }
}
