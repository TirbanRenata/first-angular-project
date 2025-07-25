import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TincturiComponent } from './tincturi.component';

describe('TincturiComponent', () => {
  let component: TincturiComponent;
  let fixture: ComponentFixture<TincturiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TincturiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TincturiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
