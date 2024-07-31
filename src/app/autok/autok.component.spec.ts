import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutokComponent } from './autok.component';

describe('AutokComponent', () => {
  let component: AutokComponent;
  let fixture: ComponentFixture<AutokComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutokComponent]
    });
    fixture = TestBed.createComponent(AutokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
