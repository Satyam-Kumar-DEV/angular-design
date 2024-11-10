import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent implements OnInit {
  users: any[] = [];
  test = [
    {
      name: 'satyam',
      email: 'satyam@gmail.com',
    },
    {
      name: 'satyam1',
      email: 'satyam1@gmail.com',
    },
    {
      name: 'satyam2',
      email: 'satyam2@gmail.com',
    },
    {
      name: 'satyam3',
      email: 'satyam3@gmail.com',
    },
  ];
  constructor(private service: TestService) {}

  ngOnInit(): void {
    this.get();
  }

  sendDatas() {
    this.service.sendData(this.test);
  }

  get() {
    this.service.userData.subscribe((data: any) => {
      this.users = data;
    });
  }
}
