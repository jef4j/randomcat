import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {

  noteName: string = '';
  noteText: string = '';

  constructor(private activatedRoute: ActivatedRoute) {}
  factText: string = '';

  addNote() {
    if (this.noteName && this.noteText) {
      console.log('Note Added:', this.noteName, this.noteText);
    
      this.noteName = '';
      this.noteText = '';
    } else {
      console.log('Please fill in both fields');
    }
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
   
      this.factText = decodeURIComponent(params['text']); 
      console.log(this.factText); 
    });
  }

}
