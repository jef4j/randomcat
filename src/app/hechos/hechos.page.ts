import { Component, OnInit } from '@angular/core';
import { CatFactService } from '../services/cat-fact-service.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-hechos',
  templateUrl: './hechos.page.html',
  styleUrls: ['./hechos.page.scss'],
})
export class HechosPage implements OnInit {

  catFacts: { id: string; text: string }[] = [];
  filteredCatFacts: { id: string; text: string }[] = []; 

  constructor(private catFactService: CatFactService) { }

  ngOnInit() {
    this.loadCatFacts();
  }

  loadCatFacts() {
    this.catFactService.getCatFacts(environment.URLBASE + "facts").subscribe(
      (data) => {
        this.catFacts = data; 
        this.filteredCatFacts = data; 
        console.log(this.catFacts); 
      },
      (error) => {
        console.error('Error al obtener los hechos:', error);
      }
    );
  }

  onSearch(event: any) {
    const query = event.target.value.toLowerCase();
    this.filteredCatFacts = this.catFacts.filter(fact => 
      fact.text.toLowerCase().includes(query) 
    );
  }
}