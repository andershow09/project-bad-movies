import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { Toast } from '@capacitor/toast';
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
  IonDatetimeButton,
  IonDatetime,
  IonPopover,
  IonButton,
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
    IonDatetimeButton,
    IonDatetime,
    IonPopover,
    IonButton,
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
  @ViewChild('datePicker', { static: false, read: IonDatetime })
  datePicker: IonDatetime;
  yearFilter: number = new Date().getFullYear();

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
    this.dashboard.cardInterval.content =
      await this.dashboardService.getProducersInterval();
  }

  //Apply Filters selected
  async applyFilters() {
    if (this.datePicker.value) {
      this.yearFilter = parseInt(
        this.datePicker.value?.toString().substring(0, 4)
      );
    }

    this.dashboard.cardWinnerByYear.content =
      await this.movieService.getWinnersByYear(this.yearFilter);
    if (this.dashboard.cardWinnerByYear.content.length === 0) {
      Toast.show({
        text: 'There are no movies for the applied filter.',
        duration: 'short',
      });
    }
  }
}
