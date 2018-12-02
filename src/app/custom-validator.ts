import { ValidationErrors, FormControl, AbstractControl } from '@angular/forms';

export class CustomValidator {

  // 姓と名の間にスペースが入っているか確認する
  static haveBlank(control: FormControl): ValidationErrors | null {
    const value = (control.value || '') + '';
    // 両端のスペースを取り除く
    const name = value.trim();
    // 半角スペース
    const NAME_COLUMN_SPRIT_VALUE = ' ';
    // 全角スペース
    const NAME_COLUMN_SPRIT_VALUE_W = '　';
    let isError = false;
    if (name.indexOf(NAME_COLUMN_SPRIT_VALUE) < 0
    && name.indexOf(NAME_COLUMN_SPRIT_VALUE_W) < 0) {
        // 半角スペースも全角スペースも含まれていない場合
        isError = true;
    }
    // 姓と名の間にスペースが入力されていない場合は、バリデーションエラーを返す
    return isError ? { haveBlank: true } : null;
  }

  // パスワードと確認用パスワードが一致するかチェック
  static matchPassword(ac: AbstractControl) {
    const password = ac.get('password').value;
    const passwordConfirm = ac.get('confirmPassword').value;
    if (password !== passwordConfirm) {
      ac.get('confirmPassword').setErrors({ notMatchPassword: true });
    }
  }
}
