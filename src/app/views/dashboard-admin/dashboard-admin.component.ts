import { Component, OnInit } from '@angular/core';
import { Feedback } from 'src/app/models/Feedback';
import { UserService } from 'src/app/services/data-services.service';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit{
  constructor(private userService: UserService,) {}

  feedbacks: Feedback[] = [];
  ngOnInit(): void {
    this.fetchFeedbacks();
  }

  fetchFeedbacks(): void {
    this.userService.getFeedbacks().subscribe({
      next: (feedbacks) => {
        this.feedbacks = feedbacks;
      },
      error: (error) => {
        console.error('Error fetching feedbacks:', error);
      }
    });
  }
}
