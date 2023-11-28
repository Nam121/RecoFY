import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScienceFictionComponent } from './science-fiction.component';

describe('ScienceFictionComponent', () => {
  let component: ScienceFictionComponent;
  let fixture: ComponentFixture<ScienceFictionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScienceFictionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScienceFictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
