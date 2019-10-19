import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewPage } from './addnew.page';

describe('AddnewPage', () => {
  let component: AddnewPage;
  let fixture: ComponentFixture<AddnewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
