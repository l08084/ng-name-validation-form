import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public nameRegisterForm: FormGroup;
  public nameControl: FormControl;

  constructor(private builder: FormBuilder) {
    this.createForm();
  }

  public ngOnInit(): void {
    this.nameControl = this.nameRegisterForm.get('email') as FormControl;
  }

  public onSubmit() {
    console.log();
  }

  private createForm() {
    this.nameRegisterForm = this.builder.group({
      name: ['', [Validators.required]]
    });
  }
}
