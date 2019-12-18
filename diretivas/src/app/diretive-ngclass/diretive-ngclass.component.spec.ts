import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretiveNgclassComponent } from './diretive-ngclass.component';

describe('DiretiveNgclassComponent', () => {
  let component: DiretiveNgclassComponent;
  let fixture: ComponentFixture<DiretiveNgclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiretiveNgclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretiveNgclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
