import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  title = 'Professores';
  teacherSelected: string;

  teachers = [
    { id: '1', name: 'Natalia', discipline: 'Matemática' },
    { id: '2', name: 'Mariana', discipline: 'Química' },
    { id: '3', name: 'Rafael', discipline: 'Física' }
  ]


  selectTeacher(teacher: any) {
    this.teacherSelected = teacher.name;
  }

  back() {
    this.teacherSelected = '';
  }
  constructor() { }

  ngOnInit(): void {
  }

}
