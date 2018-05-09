import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.css'],
  providers: [ProjectService]
})
export class ListProjectsComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private projectService: ProjectService) {}



  goToDetailPage(clickedProject) {
    this.router.navigate(['projects', clickedProject.$key]);
  };

  ngOnInit() {
    this.projects = this.projectService.getProjects();
    console.log(this.router.url);
  }

}
