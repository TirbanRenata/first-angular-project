import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiropuriComponent } from './siropuri.component';

describe('SiropuriComponent', () => {
  let component: SiropuriComponent;
  let fixture: ComponentFixture<SiropuriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiropuriComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiropuriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
