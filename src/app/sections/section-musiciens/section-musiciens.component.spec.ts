import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionMusiciensComponent } from './section-musiciens.component';

describe('SectionMusiciensComponent', () => {
  let component: SectionMusiciensComponent;
  let fixture: ComponentFixture<SectionMusiciensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionMusiciensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionMusiciensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
