import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    TestBed.overrideComponent(AppComponent, {
      add: {
        imports: [RouterTestingModule],
      },
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the pages array', () => {
    expect(component.pages).toBeDefined();
    expect(component.pages.length).toBe(2);
    expect(component.pages[0].title).toBe('Dashboard');
    expect(component.pages[0].icon).toBe('bar-chart');
    expect(component.pages[0].url).toBe('/dashboard');
    expect(component.pages[1].title).toBe('List');
    expect(component.pages[1].icon).toBe('videocam');
    expect(component.pages[1].url).toBe('/movies-list');
  });
});
