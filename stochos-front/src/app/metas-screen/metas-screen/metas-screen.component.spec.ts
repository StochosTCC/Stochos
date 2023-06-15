import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetasScreenComponent } from './metas-screen.component';

describe('MetasScreenComponent', () => {
  let component: MetasScreenComponent;
  let fixture: ComponentFixture<MetasScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetasScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetasScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
