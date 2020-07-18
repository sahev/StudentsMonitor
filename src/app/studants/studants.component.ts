import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studants',
  templateUrl: './studants.component.html',
  styleUrls: ['./studants.component.css']
})
export class StudantsComponent implements OnInit {

  title = 'Alunos';
  studantSelected: string;

  studants = [
    { id: '1', name: 'Samuel', lastname: 'Henrique', tel: '12341111' },
    { id: '2', name: 'Sara', lastname: 'Alcaras', tel: '12342222' },
    { id: '3', name: 'Marcos', lastname: 'Antonio', tel: '12343333' },
    { id: '4', name: 'Cassia', lastname: 'Oliveira', tel: '12344444' },
  ];

  studantSelect(studant: any) {
    this.studantSelected = studant.name;
  }

  back() {
    this.studantSelected = '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}

