import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';


@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.css']
})
export class GithubAppComponent implements OnInit {

  public githubUserQuery:string | undefined;
  public githubProfile:any;
  public githubRepos: any[] | undefined;
  
  constructor(private githubService:GithubService) { }

  // public searchUser(){
  //   //getting profile
  //   this.githubService.getProfile(this.githubUserQuery).subscribe((data) =>{
  //     this.githubProfile = data;
  //   })
  //   // github repos
  //   this.githubService.getrepos(this.githubUserQuery).subscribe(data => {
  //     this.githubRepos = data;
      
  //   })
  // }

  ngOnInit(): void {
  }

}
