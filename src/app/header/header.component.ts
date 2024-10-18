import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isAdmin =true;
  classeDark : string ="navbar navbar-expand-lg navbar-dark bg-dark";
  classeLight : string ="navbar navbar-expand-lg navbar-light bg-light";
}
