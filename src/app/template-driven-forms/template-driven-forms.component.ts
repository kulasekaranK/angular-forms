import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-driven-forms',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './template-driven-forms.component.html',
  styleUrl: './template-driven-forms.component.scss'
})
export class TemplateDrivenFormsComponent {
  load(f:FormsModule){
  

  }
  submit(fullname:FormsModule){
    console.log(fullname);

  }

}
