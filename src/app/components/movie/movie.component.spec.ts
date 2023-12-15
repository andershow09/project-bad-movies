import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { MovieComponent } from './movie.component';

describe('MovieComponent', () => {
  let component: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;
  let platformSpy: jasmine.SpyObj<Platform>;

  beforeEach(waitForAsync(() => {
    platformSpy = jasmine.createSpyObj('Platform', ['is']);
    TestBed.configureTestingModule({
      declarations: [MovieComponent],
      providers: [{ provide: Platform, useValue: platformSpy }],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should return true when platform is iOS', () => {
    platformSpy.is.and.returnValue(true);
    expect(component.isIos()).toBe(true);
    expect(platformSpy.is).toHaveBeenCalledWith('ios');
  });
  it('should return false when platform is not iOS', () => {
    platformSpy.is.and.returnValue(false);
    expect(component.isIos()).toBe(false);
    expect(platformSpy.is).toHaveBeenCalledWith('ios');
  });
});
