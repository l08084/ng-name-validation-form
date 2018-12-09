import { Directive, Input, ElementRef, HostListener } from '@angular/core';

/**
 * 二重送信防止ディレクティブ
 *
 */
@Directive({
  selector: '[appDoubleClickPrevention]'
})
export class DoubleClickPreventionDirective {

  // HTTP通信中フラグ
  @Input('appDoubleClickPrevention') public isLoading: boolean;

  constructor(private el: ElementRef) { }

  /**
   * 二重クリック防止のため、通信中はボタンをdisableに設定する。
   *
   */
  @HostListener('click') public onClick() {
    this.el.nativeElement.disabled = true;
    setTimeout(() => this.releaseDisable(), 1000);
  }

  /**
   * 500ミリ秒ごとにHTTP通信が完了したか確認する
   *
   */
  private releaseDisable() {
    setInterval(() => {
          if (!this.isLoading) {
              // HTTP通信中でない場合、
              // ボタンのdisableを解除する
              this.el.nativeElement.disabled = false;
          }
      } , 500);
  }

}
