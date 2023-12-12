import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { addIcons } from 'ionicons';
import {
  barChartOutline,
  barChartSharp,
  videocamOutline,
  videocamSharp,
} from 'ionicons/icons';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });

  beforeEach(async () => {
    TestBed.overrideComponent(AppComponent, {
      add: {
        imports: [RouterTestingModule],
      },
    });
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have pages defined', () => {
    expect(component.pages).toBeDefined();
    expect(component.pages.length).toBeGreaterThan(0);
  });

  it('should add icons to Ionicons', () => {
    expect(addIcons).toHaveBeenCalled();
    expect(addIcons).toHaveBeenCalledWith({
      barChartSharp: barChartSharp,
      barChartOutline: barChartOutline,
      videocamSharp: videocamSharp,
      videocamOutline: videocamOutline,
    });
  });
});
