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

  constructor(private builder: FormBuilder) {
    this.createForm();
  }

  public ngOnInit(): void {
    this.nameControl = this.nameRegisterForm.get('email') as FormControl;
  }

  public onSubmit() {
    console.log();
  }

  /**
   * フォームグループの初期化を実行する
   *
   * @private
   * @memberof AppComponent
   */
  private createForm() {
    // 氏名欄のバリデーションを設定している
    this.nameRegisterForm = this.builder.group({
      name: ['', [Validators.required, CustomValidator.haveBlank]]
    });
  }
}
