import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilswebComponent } from './utilsweb.component';

describe('UtilswebComponent', () => {
  let component: UtilswebComponent;
  let fixture: ComponentFixture<UtilswebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UtilswebComponent]
    });
    fixture = TestBed.createComponent(UtilswebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
