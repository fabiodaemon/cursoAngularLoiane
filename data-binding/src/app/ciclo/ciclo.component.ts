import { Component, OnChanges, OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnChanges, OnInit, DoCheck,
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,
OnDestroy {

  @Input() valorInicial: number = 10;

  constructor() { 
    this.log('constructor');
   }

   ngOnInit() {
   }

  ngDoCheck() { 
    this.log('ngDoCheck');
   }

  ngAfterContentInit() { 
    this.log('ngAfterContentInit');
   }

  ngAfterContentChecked() { 
    this.log('ngAfterContentChecked');
   }

  ngAfterViewChecked() { 
    this.log('ngAfterViewChecked');
   }

  ngAfterViewInit() { 
    this.log('ngAfterViewInit');
   }

  ngOnChanges() { 
    this.log('ngOnChanges');
   }

  ngOnDestroy() { 
    this.log('ngOnDestroy');
   }

   private log(hook: string){
     console.log(hook);
   }


}
