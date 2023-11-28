import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThrillersSuspenseComponent } from './thrillers-suspense.component';

describe('ThrillersSuspenseComponent', () => {
  let component: ThrillersSuspenseComponent;
  let fixture: ComponentFixture<ThrillersSuspenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThrillersSuspenseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThrillersSuspenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
