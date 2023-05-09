import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../../common/navbar/navbar.component';
import { ToolbarComponent } from 'src/app/common/toolbar/toolbar.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule , NavbarComponent, ToolbarComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
