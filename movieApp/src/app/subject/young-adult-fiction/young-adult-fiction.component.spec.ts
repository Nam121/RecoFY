import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoungAdultFictionComponent } from './young-adult-fiction.component';

describe('YoungAdultFictionComponent', () => {
  let component: YoungAdultFictionComponent;
  let fixture: ComponentFixture<YoungAdultFictionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YoungAdultFictionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YoungAdultFictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
