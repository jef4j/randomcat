import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HechosPage } from './hechos.page';

describe('HechosPage', () => {
  let component: HechosPage;
  let fixture: ComponentFixture<HechosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HechosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
