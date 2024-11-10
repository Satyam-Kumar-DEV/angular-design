import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { TestService } from '../../test.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, HeaderComponent, SidebarComponent, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent implements OnInit {
  showHideSidebar: boolean = false;
  constructor(private service: TestService) {}
  ngOnInit(): void {
    this.service.sidebarClass.subscribe((value: boolean) => {
      this.showHideSidebar = value;
    });
  }
}
