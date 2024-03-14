import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardFormComponent } from './card-module/card-form/card-form.component';
import { ListeCartesComponent } from './card-module/liste-cartes/liste-cartes.component';
import { CarteModule } from './card-module/card-module.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CarteModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tpWebTp04florian';
}
