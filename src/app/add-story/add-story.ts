import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-story',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-story.html',
  styleUrl: './add-story.css'
})
export class AddStory {

  addForm: FormGroup;

  loading = false;
  success = '';
  error = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {

    this.addForm = this.fb.group({
      title: ['', Validators.required],
      author: [''],
      views: [0]
    });

  }

  get title() {
    return this.addForm.get('title');
  }

  submitForm() {

    if (this.addForm.invalid) {
      this.addForm.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.success = '';
    this.error = '';

    this.http.post(
      'http://localhost:3000/stories',
      this.addForm.value
    ).subscribe({

      next: () => {

        this.loading = false;
        this.success = 'Thêm truyện thành công';

        this.addForm.reset({
          title: '',
          author: '',
          views: 0
        });

      },

      error: () => {

        this.loading = false;
        this.error = 'Có lỗi xảy ra';

      }

    });

  }

}