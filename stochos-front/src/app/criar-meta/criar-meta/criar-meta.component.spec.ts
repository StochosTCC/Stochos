import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarMetaComponent } from './criar-meta.component';

describe('CriarMetaComponent', () => {
  let component: CriarMetaComponent;
  let fixture: ComponentFixture<CriarMetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarMetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarMetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
