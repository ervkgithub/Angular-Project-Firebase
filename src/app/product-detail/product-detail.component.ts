import { OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../service/common.service';
import { Router } from '@angular/router';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  id: any;
  @Output() backProductListPage: EventEmitter<null> = new EventEmitter<null>();
  productDetail: any;

  constructor(private _commonService: CommonService, private _activeRoute:ActivatedRoute, private _navigate:Router, private cartService : CartService) {
   this.id = this._activeRoute.snapshot.paramMap.get('id');
  }

  backProductList() {
    this._navigate.navigate(['/products'])
  }

  ngOnInit(): void {
    this.getSingleProductDetail();
  }

  addtocart(item: any){
    this.cartService.addtoCart(item);
  }

  getSingleProductDetail() {
    this._commonService.getSingleProducts(this.id).subscribe({
      next: (data) => {
        this.productDetail = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  editSingleProductDetail() {
    let obj = this.productDetail;
    obj.title = "Charlie",
    obj.price = "5000",
    obj.description = "The dog is a domesticated descendant of the wolf. Also called the domestic dog, it is derived from the extinct Pleistocene wolf, and the modern wolf is the dog's nearest living relative.",
    obj.category = "Animal(Pet)",
    obj.image = "https://picsum.photos/id/237/200/300",

    this._commonService.editSingleProducts(this.id, obj).subscribe({
      next: (updateData) => {
        this.productDetail = updateData;
        console.log(updateData);

      },
      error: (error) => {
        console.log(error);
      },
    });
  }

}
