import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LessonService } from 'src/app/model/service/lesson/lesson.service';

import { SchedulingService } from 'src/app/model/service/scheduling/scheduling.service';
import { Lesson } from 'src/app/model/interface/lesson/lesson';
import { Scheduling } from 'src/app/model/interface/scheduling/scheduling';
import { TypeModifier } from '@angular/compiler';
import { CommonModule } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.css']
})
export class AgendamentoComponent implements OnInit {
  protected date: Date = new Date();
  protected today: string =
    `${this.date.getDate()}/${this.date.getMonth()}/${this.date.getFullYear()}`;

  schedulings: any = [];
  constructor(private lessonService: LessonService, private schedulingService: SchedulingService) { }

  ngOnInit() {
    
 

    this.schedulingService.getAll().subscribe((response) => {
      this.schedulings = response
console.log(this.schedulings)
    });

  }



}
