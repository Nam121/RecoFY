import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventureStoriesComponent } from './adventure-stories.component';

describe('AdventureStoriesComponent', () => {
  let component: AdventureStoriesComponent;
  let fixture: ComponentFixture<AdventureStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdventureStoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdventureStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
