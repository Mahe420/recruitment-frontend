import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechappsComponent } from './techapps.component';

describe('TechappsComponent', () => {
  let component: TechappsComponent;
  let fixture: ComponentFixture<TechappsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechappsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechappsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
