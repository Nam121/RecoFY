import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontierAndPioneerLifeComponent } from './frontier-and-pioneer-life.component';

describe('FrontierAndPioneerLifeComponent', () => {
  let component: FrontierAndPioneerLifeComponent;
  let fixture: ComponentFixture<FrontierAndPioneerLifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FrontierAndPioneerLifeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrontierAndPioneerLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
