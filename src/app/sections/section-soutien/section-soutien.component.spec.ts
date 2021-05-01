import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSoutienComponent } from './section-soutien.component';

describe('SectionSoutienComponent', () => {
  let component: SectionSoutienComponent;
  let fixture: ComponentFixture<SectionSoutienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionSoutienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSoutienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
