import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'

})

export class CustomDirectiveHighlight implements OnInit {
  //Sets the arguments of when an intance of this class / directive is created
  constructor(private elementRef: ElementRef){

  }

  ngOnInit(){
    this.elementRef.nativeElement.style.backgroundColor = 'blue';
  }
}

//Create a custom directive that can be used throught the application
//Directives: *ngIf, *ngFor, [ngClass], [ngStyle]
