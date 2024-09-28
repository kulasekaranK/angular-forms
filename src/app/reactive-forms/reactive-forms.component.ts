import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  MinLengthValidator,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss',
})
export class ReactiveFormsComponent {
  submitForm = new FormGroup({
    fullName: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl("", [
      Validators.required,
      Validators.pattern("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")
    ]),
    address: new FormGroup({
      city: new FormControl('', Validators.required),
      pincode: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      country: new FormControl({value:"India", disabled:true}, [Validators.required]),
    }),
  });
  get city() {
    return this.submitForm.get('address.city');
  }
  get pincode() {
    return this.addressGroup.get('pincode');
  }
  get country() {
    return this.addressGroup.get('country');
  }
  get addressGroup(): FormGroup {
    return this.submitForm.get('address') as FormGroup;
  }

  view(result: FormGroup) {
    console.log(result);
  }
}
