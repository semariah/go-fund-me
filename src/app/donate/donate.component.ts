import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css'],
  providers: [ProjectService]
})
export class DonateComponent implements OnInit {
    projectId: string;
    projectToDisplay;

    constructor(
      private route: ActivatedRoute,
      private location: Location,
      private projectService: ProjectService
    ) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.projectId = urlParameters['id'];
    });
     this.projectToDisplay = this.projectService.getProjectById(this.projectId);
  }
}
