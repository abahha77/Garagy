import { Component, OnInit } from '@angular/core';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import { MatSidenavModule } from '@angular/material/sidenav';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['../../../../bootstrap.min.css', './menu.component.css'],
})
export class MenuComponent implements OnInit {
  faT = faTimes;
  faB = faBars;
  iconShape = this.faB;

  clicked = false;

  constructor() {}

  ngOnInit(): void {}

  adjust() {
    this.clicked = !this.clicked;

    this.iconShape = this.clicked ? this.faT : this.faB;
  }
}
