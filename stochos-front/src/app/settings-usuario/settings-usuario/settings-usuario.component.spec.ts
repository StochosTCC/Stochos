import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsUsuarioComponent } from './settings-usuario.component';

describe('SettingsUsuarioComponent', () => {
  let component: SettingsUsuarioComponent;
  let fixture: ComponentFixture<SettingsUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
