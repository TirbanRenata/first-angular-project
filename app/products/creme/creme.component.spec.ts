import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CremeComponent } from './creme.component';

describe('CremeComponent', () => {
  let component: CremeComponent;
  let fixture: ComponentFixture<CremeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CremeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CremeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
