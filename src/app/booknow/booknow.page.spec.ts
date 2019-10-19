import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooknowPage } from './booknow.page';

describe('BooknowPage', () => {
  let component: BooknowPage;
  let fixture: ComponentFixture<BooknowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooknowPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooknowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
