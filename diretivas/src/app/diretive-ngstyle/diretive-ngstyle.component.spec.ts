import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretiveNgstyleComponent } from './diretive-ngstyle.component';

describe('DiretiveNgstyleComponent', () => {
  let component: DiretiveNgstyleComponent;
  let fixture: ComponentFixture<DiretiveNgstyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiretiveNgstyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretiveNgstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
