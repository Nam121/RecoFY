import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanAlienEncountersComponent } from './human-alien-encounters.component';

describe('HumanAlienEncountersComponent', () => {
  let component: HumanAlienEncountersComponent;
  let fixture: ComponentFixture<HumanAlienEncountersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HumanAlienEncountersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HumanAlienEncountersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
