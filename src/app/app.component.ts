import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './pages/layout/navbar/navbar.component';
import { ToolbarComponent } from './pages/layout/toolbar/toolbar.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [RouterModule, CommonModule, NavbarComponent, ToolbarComponent ]
})
export class AppComponent {
  title = 'angular-app';
}
