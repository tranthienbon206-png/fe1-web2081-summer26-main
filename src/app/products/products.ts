import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../products/product';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {

  products: Product[] = [];

  loading: boolean = false;

  error: boolean = false;

  deletingId: number | null = null;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {

    this.loading = true;
    this.error = false;

    this.http.get<Product[]>("http://localhost:3000/products")
      .subscribe({

        next: (data) => {

          this.products = data;

          this.loading = false;

        },

        error: () => {

          this.loading = false;

          this.error = true;

        }

      });

  }

  deleteProduct(id: number) {

    const confirmDelete = confirm("Bạn có chắc muốn xóa không?");

    if (!confirmDelete) {
      return;
    }

    this.deletingId = id;

    this.http.delete(`http://localhost:3000/products/${id}`)
      .subscribe({

        next: () => {

          this.products = this.products.filter(item => item.id != id);

          this.deletingId = null;

          alert("Xóa thành công");

        },

        error: () => {

          this.deletingId = null;

          alert("Xóa thất bại");

        }

      })

  }

}