import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsGrupoComponent } from './settings-grupo.component';

describe('SettingsGrupoComponent', () => {
  let component: SettingsGrupoComponent;
  let fixture: ComponentFixture<SettingsGrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsGrupoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
