// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable, throwError } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class GithubService {

//   constructor(private httpClient:HttpClient) { }

//    //for github profile
//   public getProfile(searchQuery: any):Observable<any>{
//     let dataURL = `https://api.github.com/users/${searchQuery}`
//     return this.httpClient.get<any>(dataURL)
//   }
//   public getrepos(searchQuery: any):Observable<any[]>{
//     let dataURL = `https://api.github.com/users/${searchQuery}/repos`
//     return this.httpClient.get<any[]>(dataURL)
//   }

//   public handleErrors(error:HttpErrorResponse){
//     let errorMessage:string;
//     if(error.error instanceof ErrorEvent){
//       errorMessage = `MESSAGE : ${error.error.message}`;
//     }
//     else{
//       errorMessage = `STATUS : ${error.status} MESSAGE :${error.message}`
//     }
//     return throwError(errorMessage);
//   }
// }
// function retry(count: any, arg1: number): import("rxjs").OperatorFunction<any[], any[]> {
//   throw new Error('Function not implemented.');
// }

// function count(count: any, arg1: number): import("rxjs").OperatorFunction<any[], any[]> {
//   throw new Error('Function not implemented.');
// }

