import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { signupContraint } from '../../constraints/signup.constraint';
import { CustomValidators } from '../../validators/custom-validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // FormGroup(controls, [validators], [asyncValidators])
  // FormControl(value, [validators], [asyncValidators])
  form = new FormGroup({
    email: new FormControl(null, [
      Validators.required,
      CustomValidators.email()
    ]),
    password: new FormControl(null, [Validators.required]),
    confirm: new FormControl(null, [Validators.required]),
  }, [
    CustomValidators.matchPassword()
  ]);

  constructor() { }

  ngOnInit(): void {
  }

  public signup(): void {
    this.form.markAllAsTouched();

    if( this.form.valid ) {
      console.log(this.form.getRawValue());
    }
  }

  public validate(name: string): string|null {
    const field = this.form.get(name);

    const validators = signupContraint[name];
    if( field?.touched ) {
      for(let validator in validators) {
        if(field?.hasError(validator)) {
          return validators[validator];
        }
      }
    }

    return null;
  }

}
