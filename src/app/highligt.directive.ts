import { Directive,ElementRef , HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighligt]'
})
export class HighligtDirective {

  // constructor(private elementRef: ElementRef, private renderer:Renderer2) { }

  // ngAfterViewInit(): void {
  //   this.renderer.addClass(this.elementRef.nativeElement,'highlight');
  // }

  constructor(private el: ElementRef, private renderer: Renderer2) { }
  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.addClass(this.el.nativeElement, 'highlight');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeClass(this.el.nativeElement, 'highlight');
  }
}
