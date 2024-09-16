import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-plan-form', // Ensure the selector is 'app-plan-form'
  templateUrl: './plan-form.component.html',
  styleUrls: ['./plan-form.component.css'],
})
export class PlanFormComponent {
  planForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.planForm = this.fb.group({
      planName: [
        '',
        [Validators.required, Validators.pattern(/^[a-zA-Z0-9 ]+$/)],
      ],
      shortDescription: [
        '',
        [Validators.required, Validators.pattern(/^[a-zA-Z0-9,.!? ]+$/)],
      ],
      basePrice: ['', [Validators.required, Validators.min(0)]],
      cgst: ['', [Validators.required, Validators.min(0)]],
      sgst: ['', [Validators.required, Validators.min(0)]],
      igst: ['', [Validators.required, Validators.min(0)]],
      totalTax: ['', [Validators.required]],
      totalAmount: ['', [Validators.required]],
      isActive: [true],
      servicesType: ['', [Validators.required]],
      validForDays: ['', [Validators.required, Validators.min(0)]],
      dueDays: ['', [Validators.required, Validators.min(0)]],
      eligibilities: [[]], // Mock service later
    });
  }

  // Calculate the total tax
  calculateTotalTax() {
    const { cgst, sgst, igst } = this.planForm.value;
    const totalTax =
      (parseFloat(cgst) || 0) +
      (parseFloat(sgst) || 0) +
      (parseFloat(igst) || 0);
    this.planForm.patchValue({ totalTax });
  }

  // Calculate total amount
  calculateTotalAmount() {
    const { basePrice, totalTax } = this.planForm.value;
    const totalAmount =
      (parseFloat(basePrice) || 0) + (parseFloat(totalTax) || 0);
    this.planForm.patchValue({ totalAmount });
  }

  onSubmit() {
    if (this.planForm.valid) {
      console.log('Form Submitted!', this.planForm.value);
    } else {
      console.log('Form Invalid');
    }
  }
}
