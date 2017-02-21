/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KatakanaComponent } from './katakana.component';

describe('KatakanaComponent', () => {
  let component: KatakanaComponent;
  let fixture: ComponentFixture<KatakanaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KatakanaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KatakanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
