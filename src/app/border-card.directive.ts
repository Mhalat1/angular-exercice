import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {

  constructor(private el: ElementRef) {
    this.setHeight(400);
    this.setBorder(`#f5f5f5`)
    }
  // permet de representer une reference vers les cartes pokemon
  // el de type ElementRef qui vient de angular lui meme, 
  //cest une elemnt qui permet de representer une reference vers mes carte de pokemon, 
  //une reference vers l element du dom ou on va avoitr les carte opkemon


  @HostListener('mouseenter') onMouseEnter(){
    this.setBorder('#009688');
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder('#f5f5f5');
  }

  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;}
    // reference vers l'element du dom puis nativElement j'accede a lelement native du dom vers 
    //lequel ma directive sera aplliquee, plus precis que ElementRef
    setBorder(color: string) {
      this.el.nativeElement.style.border = `solid 4px ${color}`;}
  



}
