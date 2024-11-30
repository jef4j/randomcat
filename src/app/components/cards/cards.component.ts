import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FotocatService } from 'src/app/services/fotocat.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {

  colors = ['primary', 'secondary', 'tertiary', 'success', 'warning', 'danger', 'light', 'medium', 'dark'];
  catImageUrl: string | null = null;
  errorMessage: string | null = null;
  @Input() id!: string;
  @Input() texto!: string;



  randomColor!: string;

  constructor(private FotocatService:FotocatService, private router:Router) { }

  ngOnInit() {
    this.randomColor = this.getRandomColor();
    this.FotocatService.getCatImageUrl().subscribe(
      (url) => {
        this.catImageUrl = url;
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }
  onClick(){
    console.log(this.id)
    this.router.navigate(['/detalles', this.id]);
  }



  getRandomColor(): string {
    const randomIndex = Math.floor(Math.random() * this.colors.length);
    return this.colors[randomIndex];
  }

}