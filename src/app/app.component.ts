
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsComponent } from "./reactive-forms/reactive-forms.component";
import { TemplateDrivenFormsComponent } from "./template-driven-forms/template-driven-forms.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsComponent, TemplateDrivenFormsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
 
}
