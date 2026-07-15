import { Component } from '@angular/core';
import {
  FormBuilder,
  Validators,
  ReactiveFormsModule,
  FormGroup
} from '@angular/forms';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css'
})
export class AddProduct {

  addForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.addForm = this.fb.group({
      name: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(1)]],
      category: ['', Validators.required]
    });

  }

  get name() {
    return this.addForm.get('name');
  }

  get price() {
    return this.addForm.get('price');
  }

  get category() {
    return this.addForm.get('category');
  }

  onSubmit() {

    if (this.addForm.valid) {
      console.log(this.addForm.value);
      alert("Thêm sản phẩm thành công");
    }

  }

}