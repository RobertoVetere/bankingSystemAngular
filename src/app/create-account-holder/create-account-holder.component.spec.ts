import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountHolderComponent } from './create-account-holder.component';

describe('CreateAccountHolderComponent', () => {
  let component: CreateAccountHolderComponent;
  let fixture: ComponentFixture<CreateAccountHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAccountHolderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAccountHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
