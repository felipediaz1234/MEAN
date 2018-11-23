import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorizacionComponent } from './categorizacion.component';

describe('CategorizacionComponent', () => {
  let component: CategorizacionComponent;
  let fixture: ComponentFixture<CategorizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
