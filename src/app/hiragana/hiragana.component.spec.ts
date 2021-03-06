/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HiraganaComponent } from './hiragana.component';

describe('HiraganaComponent', () => {
  let component: HiraganaComponent;
  let fixture: ComponentFixture<HiraganaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiraganaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiraganaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
