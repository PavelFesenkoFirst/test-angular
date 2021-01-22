import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-first',
  templateUrl: './form-first.component.html',
  styleUrls: ['form-first.component.css']
})
export class FormFirstComponent implements OnInit{
  form: FormGroup;
  formSubmitAttempt = false;
  constructor(private fb: FormBuilder, private router: Router) { }
  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.form = new FormGroup({
      fname: new FormControl('', [
        Validators.minLength(3),
        Validators.required,
      ]),
      sname: new FormControl(null, [
        Validators.required,
        Validators.minLength(3)
      ]),
      email: new FormControl('', [
        Validators.email,
        Validators.required
      ])
    });
  }

  // tslint:disable-next-line:typedef
  submit() {
    console.log(this.form);
    this.formSubmitAttempt = true;
    if (this.form.valid) {
      this.router.navigate(['/second-page']);
    } else {
      console.log('dont send');
    }
  }

}
