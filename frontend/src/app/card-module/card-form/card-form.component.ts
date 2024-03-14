import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardServiceService } from '../../card-service.service';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrl: './card-form.component.css'
})
export class CardFormComponent implements OnInit  {
cardForm!: FormGroup

constructor(private formBuilder: FormBuilder,private cardService: CardServiceService){}

ngOnInit(): void {
  this.cardForm = this.formBuilder.group({
    nomCarte: ['', Validators.required],
    codeCarte: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
    ccv: ['', [Validators.required, Validators.pattern('^[0-9]{3}$')]],
    expiration: this.formBuilder.group({
      mois: ['', [Validators.required, Validators.min(1), Validators.max(12)]],
      annee: ['', [Validators.required, Validators.min(new Date().getFullYear()), Validators.max(new Date().getFullYear() + 10)]]
    })
  });
}
onSubmit() {
  if (this.cardForm.valid) {
    console.log('Formulaire valide:', this.cardForm.value);
      this.cardService.ajouterCarte(this.cardForm.value);
      this.cardForm.reset();
  } else {
    console.log('Formulaire invalide. Veuillez vérifier les champs.');
  }
}
}
