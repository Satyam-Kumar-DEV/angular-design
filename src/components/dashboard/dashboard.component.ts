import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  calendarData: any[] = [
    {
      date: '15',
      month: 'Dec',
      text: 'FD of Rs 1,50,000  in Axis Bank maturing',
    },
    {
      date: '25',
      month: 'Dec',
      text: 'FD of Rs 1,50,000  in Axis Bank maturing',
    },
    {
      date: '15',
      month: 'Jan',
      text: 'FD of Rs 1,50,000  in Axis Bank maturing',
    },
    {
      date: '24',
      month: 'Feb',
      text: 'FD of Rs 1,50,000  in Axis Bank maturing',
    },
    {
      date: '26',
      month: 'Feb',
      text: 'FD of Rs 1,50,000  in Axis Bank maturing',
    },
    {
      date: '28',
      month: 'Feb',
      text: 'FD of Rs 1,50,000  in Axis Bank maturing',
    },
  ];
}
