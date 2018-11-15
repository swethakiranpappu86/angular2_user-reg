import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, PatternValidator } from '@angular/forms';


@Component({  
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  // emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  registration_Form: FormGroup;
    User_Name = new FormControl("", Validators.required);
    First_Name = new FormControl("",Validators.required);
    Last_Name = new FormControl("", Validators.required);
    Email = new FormControl("", Validators.required);
    Password = new FormControl("", Validators.required);
    Re_Password = new FormControl("", Validators.required);
    PinCode = new FormControl("", Validators.compose([Validators.minLength(6)]));

    constructor(fb: FormBuilder) {
        this.registration_Form = fb.group({
            "User_Name": this.User_Name,
            "First_Name": this.First_Name,
            "Last_Name" : this.Last_Name,
            "Email": this.Email,
            "Password": this.Password,
            "Re_Password": this.Re_Password,
            "PinCode": this.PinCode
        });
    }

    doRegistration(values: any): void {
        if (this.registration_Form.valid) {
            console.log(values);
        }
    }

}
