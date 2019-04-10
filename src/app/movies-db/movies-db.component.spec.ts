import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesDBComponent } from './movies-db.component';

describe('MoviesDBComponent', () => {
  let component: MoviesDBComponent;
  let fixture: ComponentFixture<MoviesDBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesDBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
