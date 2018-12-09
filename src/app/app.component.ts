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
  public passwordControl: FormControl;
  public confirmPasswordControl: FormControl;
  public hide = true;

  // HTTP通信中フラグ
  public isLoading = false;

  constructor() {
  }

  public ngOnInit(): void {
    this.nameControl = this.nameRegisterForm.get('email') as FormControl;
    this.passwordControl = this.nameRegisterForm.get('password') as FormControl;
    this.confirmPasswordControl = this.nameRegisterForm.get('confirmPassword') as FormControl;
  }

  /**
   * 登録ボタン押下時に呼び出し、
   * HTTP通信のダミーメソッドを呼ぶ
   *
   */
  public onSubmit() {
    this.callHttpDummy();
  }

  /**
   * HTTP通信のダミーメソッド
   * 10秒間、HTTP通信中をTRUEにする
   *
   */
  private callHttpDummy() {
    this.isLoading = true;
    setTimeout(() => this.isLoading = false, 100000);
  }
}
