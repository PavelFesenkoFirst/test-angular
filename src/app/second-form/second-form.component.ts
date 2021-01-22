import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-second-form',
  templateUrl: './second-form.component.html',
  styleUrls: ['second-form.component.css']
})
export class SecondFormComponent implements OnInit{
  form: FormGroup;
  formSubmitAttempt = false;
  modal = false;
  constructor(private fb: FormBuilder, private router: Router) { }
  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.form = new FormGroup({
      company: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      phone: new FormControl('+380', [
        Validators.required,
        Validators.minLength(13),
        ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(3)
      ]),
      checkbox: new FormControl('', [
        Validators.required
      ])
    });
  }
  // tslint:disable-next-line:typedef
  submit() {
    console.log(this.form);
    this.formSubmitAttempt = true;
    if (this.form.valid) {
      this.router.navigate(['/last-page']);
    } else {
      console.log('dont send');
    }
  }
}
