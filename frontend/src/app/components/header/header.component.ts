import { Component, OnInit } from '@angular/core';

import { routes } from '../../app-routing.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html', 
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  liSelected: any = routes;

  
  constructor() { }
  
  ngOnInit(): void {
    
  }
  
  exibir(): void{
    console.log(this.liSelected)
  }
  
}
