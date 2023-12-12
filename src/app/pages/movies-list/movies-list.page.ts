import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { Toast } from '@capacitor/toast';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardHeader,
  IonCol,
  IonContent,
  IonDatetime,
  IonDatetimeButton,
  IonHeader,
  IonIcon,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonLabel,
  IonList,
  IonMenuButton,
  IonModal,
  IonNote,
  IonPopover,
  IonRadio,
  IonRadioGroup,
  IonRefresher,
  IonRefresherContent,
  IonRow,
  IonSearchbar,
  IonTitle,
  IonToolbar,
  RefresherCustomEvent,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { funnelOutline, sadOutline } from 'ionicons/icons';
import { MovieComponent } from 'src/app/components/movie/movie.component';
import { Movie } from 'src/app/models/movie/movie';
import { MovieService } from 'src/app/services/movie/movie.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.page.html',
  styleUrls: ['./movies-list.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonTitle,
    IonContent,
    IonList,
    IonRefresher,
    IonRefresherContent,
    MovieComponent,
    IonSearchbar,
    IonButton,
    IonIcon,
    IonDatetime,
    IonDatetimeButton,
    IonLabel,
    IonModal,
    IonNote,
    IonPopover,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonRadio,
    IonRadioGroup,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
  ],
})
export class MoviesListPage implements OnInit {
  private data = inject(MovieService);
  public title = 'Lista de Filmes';
  public showFilter: boolean = false;
  @ViewChild('datePicker', { static: false, read: IonDatetime })
  datePicker: IonDatetime;
  movies: Movie[] = [];
  public page: number = 0;
  yearFilter: number = 0;
  winnerFilter: boolean | undefined = undefined;

  constructor() {
    addIcons({
      funnelOutline,
      sadOutline,
    });
  }

  //Load movies on init
  ngOnInit() {
    this.getMovies();
  }

  //Refresh the page
  refresh(ev: any) {
    this.getMovies();
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  //Request the movies list in the Service
  async getMovies(): Promise<Movie[]> {
    let arrayResult = await this.data.getAllMovies(
      this.page,
      this.winnerFilter,
      this.yearFilter
    );
    this.movies = [...this.movies, ...arrayResult];
    return this.movies;
  }

  //DetectValueChange from RadioButton filter of Winners
  handleChange(ev: any) {
    const valueSelected = ev.target.value;
    if (valueSelected == 'undefined') this.winnerFilter = undefined;
    else this.winnerFilter = valueSelected == 'true';
  }

  //Apply Filters selected
  applyFilters() {
    if (this.datePicker.value) {
      this.yearFilter = parseInt(
        this.datePicker.value?.toString().substring(0, 4)
      );
    }
    this.movies = [];
    this.getMovies();
  }

  //Reset Filter and reload List from movies
  resetFilters() {
    this.yearFilter = 0;
    this.winnerFilter = undefined;
    this.movies = [];
    this.getMovies();
    this.showFilter = false;
  }

  //Detect event Oninfinit an request new Movies from new page
  onIonInfinite(ev: InfiniteScrollCustomEvent) {
    console.log('Evento:', ev);

    //Check if is last page, and show message end of list
    if (!this.data.isLastPage()) {
      this.page++;
      this.getMovies();
      setTimeout(() => {
        ev.target.complete();
      }, 1000);
    } else {
      this.presentToast();
      ev.target.complete();
    }
  }
  //Show Toast No More Movies
  async presentToast() {
    Toast.show({
      text: 'Não há mais Filmes',
      duration: 'short',
    });
  }
}
