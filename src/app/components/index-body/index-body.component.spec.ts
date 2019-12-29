import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexBodyComponent } from './index-body.component';

describe('IndexBodyComponent', () => {
  let component: IndexBodyComponent;
  let fixture: ComponentFixture<IndexBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
