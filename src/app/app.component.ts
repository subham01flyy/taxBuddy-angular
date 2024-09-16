import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import Reactive forms
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngIf and *ngFor
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule for formGroup
import { HttpClient } from '@angular/common/http';
import { PlanService } from './plan.service'; // Adjust the import path as needed

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true, // Enable standalone mode if using standalone components
  imports: [CommonModule, ReactiveFormsModule], // Import the modules in the component
})
export class AppComponent {
  planForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.planForm = this.fb.group({
      planName: [
        '',
        [Validators.required, Validators.pattern(/^[a-zA-Z0-9 ]+$/)],
      ],
      shortDescription: [
        '',
        [Validators.required, Validators.pattern(/^[a-zA-Z0-9\s\.\,\!\?\-]+$/)],
      ],
      basePrice: [0, [Validators.required, Validators.min(0)]],
      cgst: [0, [Validators.required, Validators.min(0)]],
      sgst: [0, [Validators.required, Validators.min(0)]],
      igst: [0, [Validators.required, Validators.min(0)]],
      totalTax: [0, [Validators.required]],
      totalAmount: [0, [Validators.required]],
      isActive: [true],
      servicesType: [
        '',
        [Validators.required, Validators.pattern(/^(ITR|TPA|GST)$/)],
      ],
      validForDays: [0, [Validators.required, Validators.min(0)]],
      dueDays: [0, [Validators.required, Validators.min(0)]],
    });
  }

  calculateTotalTax() {
    const cgst = this.planForm.get('cgst')?.value || 0;
    const sgst = this.planForm.get('sgst')?.value || 0;
    const igst = this.planForm.get('igst')?.value || 0;
    const totalTax = cgst + sgst + igst;
    this.planForm.patchValue({ totalTax });
  }

  calculateTotalAmount() {
    const basePrice = this.planForm.get('basePrice')?.value || 0;
    const totalTax = this.planForm.get('totalTax')?.value || 0;
    const totalAmount = basePrice + totalTax;
    this.planForm.patchValue({ totalAmount });
  }

  onSubmit() {
    if (this.planForm.valid) {
      console.log('Form Data:', this.planForm.value);
      alert('Plan created successfully!');
    } else {
      alert('Please fill out the form correctly.');
    }
  }
}
