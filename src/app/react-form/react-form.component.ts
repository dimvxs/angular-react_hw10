import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators, FormGroup, FormControl, FormArray, FormBuilder, NgModel  } from '@angular/forms';
@Component({
  selector: 'app-react-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './react-form.component.html',
  styleUrl: './react-form.component.css'
})
export class ReactFormComponent {
  myForm : FormGroup;
 flag: boolean = false;
  constructor(private formBuilder: FormBuilder){

    this.myForm = formBuilder.group({
          "userEmail": new FormControl("", [Validators.required, Validators.email]),
          "userPassword": new FormControl("",  Validators.required),
          "hobby": formBuilder.array(["", Validators.maxLength(100)])
      });
  }

  submit(){
      console.log(this.myForm);
  }

  addHobby(){
    (<FormArray>this.myForm.controls["hobby"]).push(new FormControl("", Validators.maxLength(100)));
}

getFormsControls() : FormArray{
  return this.myForm.controls["hobby"] as FormArray;
}

resetForm(){
  this.myForm.reset();
}
}
