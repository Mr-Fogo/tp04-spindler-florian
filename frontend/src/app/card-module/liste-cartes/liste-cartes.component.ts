import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { CardServiceService } from '../../card-service.service';

@Component({
  selector: 'app-liste-cartes',
  templateUrl: './liste-cartes.component.html',
  styleUrl: './liste-cartes.component.css'
})
export class ListeCartesComponent implements OnInit {
  @Input() cartes: any[] = [];

  constructor(private cardService: CardServiceService) { }
  ngOnInit(): void {
    this.cardService.cartes$.subscribe(cartes => {
      this.cartes = cartes;
    });
  }
}
