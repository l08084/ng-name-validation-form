import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidator } from './custom-validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public nameRegisterForm: FormGroup;
  public nameControl: FormControl;
  // add this!
  public passwordControl: FormControl;
  public hide = true;

  constructor(private builder: FormBuilder) {
    this.createForm();
  }

  public ngOnInit(): void {
    this.nameControl = this.nameRegisterForm.get('email') as FormControl;
    // add this!
    this.passwordControl = this.nameRegisterForm.get('password') as FormControl;
  }

  public onSubmit() {
    console.log();
  }

  /**
   * フォームグループの初期化を実行する
   *
   */
  private createForm() {
    // 氏名欄のバリデーションを設定している
    this.nameRegisterForm = this.builder.group({
      name: ['', [Validators.required, CustomValidator.haveBlank]],
      // add this!
      password: ['', [Validators.required]]
    });
  }
}
