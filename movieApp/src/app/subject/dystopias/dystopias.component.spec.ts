import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DystopiasComponent } from './dystopias.component';

describe('DystopiasComponent', () => {
  let component: DystopiasComponent;
  let fixture: ComponentFixture<DystopiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DystopiasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DystopiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
