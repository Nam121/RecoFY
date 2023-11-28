import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FantasyFictionComponent } from './fantasy-fiction.component';

describe('FantasyFictionComponent', () => {
  let component: FantasyFictionComponent;
  let fixture: ComponentFixture<FantasyFictionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FantasyFictionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FantasyFictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
