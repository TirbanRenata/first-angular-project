import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeaiuriComponent } from './ceaiuri.component';

describe('CeaiuriComponent', () => {
  let component: CeaiuriComponent;
  let fixture: ComponentFixture<CeaiuriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CeaiuriComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CeaiuriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
