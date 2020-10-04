import { Component, OnInit } from '@angular/core';
import * as resume from "../../data/resume.json";
import { Education, Experience, SocialNetworks, Skills, SideProjects } from 'src/model/resume.model';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  summary: string;
  socialNetworks:SocialNetworks[];
  education: Education[];
  skills: Skills[];
  experience: Experience[];
  sideProjects: SideProjects[];
  publications: any;

  constructor() { }

  ngOnInit() {
    this.summary = resume.summary;
    this.socialNetworks = resume.socialNetworks;
    this.education = resume.education;
    this.skills = resume.skills;
    this.experience = resume.experience;
    this.sideProjects = resume.sideProjects;
    this.publications = resume.publications;
  }

}
