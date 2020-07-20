import { Component, OnInit } from '@angular/core';
import { Studant } from '../models/studant';

@Component({
  selector: 'app-studants',
  templateUrl: './studants.component.html',
  styleUrls: ['./studants.component.css']
})
export class StudantsComponent implements OnInit {

  title = 'Alunos';
  studantSelected: Studant;

  studants = [
    { id: '1', name: 'Samuel', lastname: 'Henrique', tel: '12341111' },
    { id: '2', name: 'Sara', lastname: 'Alcaras', tel: '12342222' },
    { id: '3', name: 'Marcos', lastname: 'Antonio', tel: '12343333' },
    { id: '4', name: 'Cassia', lastname: 'Oliveira', tel: '12344444' },
  ];

  studantSelect(studant: Studant) {
    this.studantSelected = studant;
  }

  back() {
    this.studantSelected = null;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

