import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTheaterComponent } from './add-theater.component';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialog } from '@angular/material';
const formBuilderStub = new FormBuilder();
const matDialogStub = {
  open: (dialogComponentName1, object2) => ({
    afterClosed: () => {
      return { subscribe: result => [] };
    }
  }),
  closeAll: () => ({
    afterClosed: () => {
      return { subscribe: result => [] };
    }
  })
};
describe('AddTheaterComponent', () => {
  let component: AddTheaterComponent;
  let fixture: ComponentFixture<AddTheaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [AddTheaterComponent],
      imports: [FormsModule, ReactiveFormsModule, BrowserAnimationsModule],
      providers: [{ provide: FormBuilder, useValue: formBuilderStub }, { provide: MatDialog, useValue: matDialogStub }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTheaterComponent);
    component = fixture.componentInstance;
    component.newTheater = formBuilderStub.group({
      tid: new FormControl(),
      name: new FormControl(),
      city: new FormControl(),
      gLocation: new FormControl(),
      capacity: new FormControl()
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('can onSubmit', () => {
    expect(component.onSubmit).toBeDefined();
    spyOn(component, 'onSubmit').and.callThrough();
    component.onSubmit();
    expect(component.onSubmit).toHaveBeenCalled();
  });

  it('can dialogOk', () => {
    expect(component.dialogOk).toBeDefined();
    spyOn(component, 'dialogOk').and.callThrough();
    component.dialogOk();
    expect(component.dialogOk).toHaveBeenCalled();
  });
});
