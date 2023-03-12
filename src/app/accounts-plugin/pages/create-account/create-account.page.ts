import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'create-account-page',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss']
})
export class CreateAccountPage implements OnInit {

    newAccountForm: FormGroup;
    
    constructor() { }

    ngOnInit() {
        this.newAccountForm = new FormBuilder().group({
            firstName: new FormControl(null, Validators.required),
            lastName: new FormControl(null, Validators.required),
            email: new FormControl(null, Validators.required)
        });
    }

    canSubmit(form: FormGroup) {
        return form.valid;
    }

    submit(form: FormGroup) {
        console.log(form.value);
    }
}
