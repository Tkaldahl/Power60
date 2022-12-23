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
            firstName: new FormControl("Taylor", Validators.required),
            lastName: new FormControl("Kaldahl", Validators.required)
        });
    }
}
