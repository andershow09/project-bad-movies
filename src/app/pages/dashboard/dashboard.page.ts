import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { Dashboard } from 'src/app/models/dashboard/dashboard';
import { Movie } from 'src/app/models/movie/movie';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';
import { MovieService } from 'src/app/services/movie/movie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonTitle,
    IonContent,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonItem,
    IonList,
    IonLabel,
  ],
})
export class DashboardPage implements OnInit {
  private dashboardService = inject(DashboardService);
  private movieService = inject(MovieService);
  public folder!: string;
  public title = 'Dashboard';
  movies: Movie[] = [];
  dashboard!: Dashboard;
  producer = {
    producer: '',
    interval: 0,
    previousWin: 0,
    followingWin: 0,
  };

  constructor() {}

  //Load data on init
  ngOnInit() {
    this.getData();
  }
  // get data from API and load the screen dashboard data
  async getData() {
    this.dashboard = Dashboard.returnCards();
    this.dashboard.cardYearsMultiple.content =
      await this.dashboardService.getMoviesWithMultipleWinners();
    this.dashboard.cardTop3.content =
      await this.dashboardService.getMoviesCountByStudio();
    this.dashboard.cardWinnerByYear.content =
      await this.movieService.getWinnersByYear();
    this.dashboard.cardInterval.content =
      await this.dashboardService.getProducersInterval();
  }
}
