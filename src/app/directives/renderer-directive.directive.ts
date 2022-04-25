import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appRendererDirective]',
})
export class RendererDirectiveDirective implements OnInit {
  // @HostBinding('propertyName of element') propName: type;
  @HostBinding('style.backgroundColor') onHoverBgColor: string;

  constructor(private eleRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // this.renderer.setStyle(
    //   this.eleRef.nativeElement,
    //   'background-color',
    //   'lime'
    // );
  }

  @HostListener('mouseover') mouseoverABCD(eventData: Event) {
    this.onHoverBgColor = 'lime';
  }

  @HostListener('mouseleave') mouseoutXYZ(eventData: Event) {
    this.onHoverBgColor = 'transparent';
  }

  // @HostListener('mouseover') mouseoverABCD(eventData: Event) {
  //   this.renderer.setStyle(
  //     this.eleRef.nativeElement,
  //     'background-color',
  //     'lime'
  //   );
  // }

  // HostListener('eventName') funcName(event){}
  // @HostListener('mouseleave') mouseoutXYZ(eventData: Event) {
  //   this.renderer.setStyle(
  //     this.eleRef.nativeElement,
  //     'background-color',
  //     'transparent'
  //   );
  // }
}
