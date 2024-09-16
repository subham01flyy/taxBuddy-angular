import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxBuddyFormComponent } from './tax-buddy-form.component';

describe('TaxBuddyFormComponent', () => {
  let component: TaxBuddyFormComponent;
  let fixture: ComponentFixture<TaxBuddyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxBuddyFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxBuddyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
