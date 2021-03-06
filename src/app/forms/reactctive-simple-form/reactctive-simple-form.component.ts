import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';

import { User } from '../../western-union/western-union-model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-reactctive-simple-form',
  templateUrl: './reactctive-simple-form.component.html',
  styleUrls: ['./reactctive-simple-form.component.css']
})
export class ReactctiveSimpleFormComponent implements OnInit {
  user: FormGroup;
  forbiddenUserNames = ['Fane', 'Nefa'];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.user = this.formBuilder.group({
      name: ['', [ Validators.required, Validators.minLength(3), this.chekcForbiddenNames.bind(this)]],
      account: this.formBuilder.group({
        email: ['', [Validators.required], this.checkEmails.bind(this)],
        confirm: ['', Validators.required]
      }),
      options: this.formBuilder.array([])
    });

    // this.user.valueChanges.subscribe(
    //   (value) => console.log(value)
    // );

    // this.user.statusChanges.subscribe(
    //   (status) => console.log(status);
        // );

  }

  get options(): FormArray {
    return (<FormArray>this.user.get('options'));
  }

  clearOption(index) {
    this.options.removeAt(index);
  }

  addOption(title, amount) {
    this.options.push(
      this.formBuilder.group({
        'title': [title || ''],
        'amount': [amount || '']
      })
    )
  }

  onSubmit(usr) {
    console.log(this.user);
    this.user.reset();
  }

  chekcForbiddenNames(control: FormControl): {[key: string]: boolean} | null {
    if (~this.forbiddenUserNames.indexOf(control.value)) {
      this.user.patchValue({
        'name': control.value.slice(0, -1)
      });
      return {nameForbidden: true};
    }
    return null;
  }

  checkEmails(control: FormControl): Promise<any>| Observable<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(control.value == 'test@test.com') {
          resolve({emailForbidden: true});
        } else resolve(null);
      }, 1500);
    });
  }

  protected async checkData(control) {
    const x = await this.checkEmails(control);
    console.log(x);
  }
}
