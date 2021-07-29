import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private httpClient:HttpClient) { }

   //for github profile
  public getProfile(searchQuery: any):Observable<any>{
    let dataURL = `https://api.github.com/users/${searchQuery}`
    return this.httpClient.get<any>(dataURL)
  }
  public getrepos(searchQuery: any):Observable<any[]>{
    let dataURL = `https://api.github.com/users/${searchQuery}/repos`
    return this.httpClient.get<any[]>(dataURL)
  }

}

