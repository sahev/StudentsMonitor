import { Component, OnInit } from '@angular/core';
import { Teacher } from '../models/teacher'

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  title = 'Professores';
  teacherSelected: Professor;

  teachers = [
    { id: '1', name: 'Natalia', discipline: 'Matemática' },
    { id: '2', name: 'Mariana', discipline: 'Química' },
    { id: '3', name: 'Rafael', discipline: 'Física' }
  ]


  selectTeacher(teacher: Teacher) {
    this.teacherSelected = teacher;
  }

  back() {
    this.teacherSelected = null;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
