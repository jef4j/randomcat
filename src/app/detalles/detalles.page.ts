import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {

  noteName: string = '';
  noteText: string = '';

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}
  factText: string = '';

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
   
      this.factText = decodeURIComponent(params['text']); 
      console.log(this.factText); 
    });
  }
  copyToClipboard() {
    const textArea = document.createElement('textarea');
    textArea.value = this.factText; 
    document.body.appendChild(textArea); 
    textArea.select();
    document.execCommand('copy'); 
    document.body.removeChild(textArea); 
    alert('¡Texto copiado!'); 
  }
navigateToHome(){
    this.router.navigate(['/home']);
  }

}
