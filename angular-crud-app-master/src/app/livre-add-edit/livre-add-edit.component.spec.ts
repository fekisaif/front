import { ComponentFixture, TestBed } from '@angular/core/testing';

import { livreAddEditComponent } from './livre-add-edit.component';

describe('livreAddEditComponent', () => {
  let component: livreAddEditComponent;
  let fixture: ComponentFixture<livreAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ livreAddEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(livreAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
