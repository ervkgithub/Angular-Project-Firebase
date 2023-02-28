import { Component, EventEmitter, OnInit, Output, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonService } from '../service/common.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products:any;
  page: number = 1;
  @Output() productDetail:EventEmitter<any> = new EventEmitter<any>();

  constructor(private _commonService: CommonService, private cartService : CartService){
    console.log("products data", this.products);
  }

  passData(id:any){
    this.productDetail.emit(id);
  }

  ngOnInit(): void {
    this.getAllProducts();
  }

  addtocart(item: any){
    this.cartService.addtoCart(item);
  }

  getAllProducts(){
    this._commonService.getAllProducts().subscribe({
      next:(data)=>{
        console.log(data);
        this.products = data;
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }
}
