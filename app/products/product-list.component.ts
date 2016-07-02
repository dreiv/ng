import {Component, OnInit} from "angular2/core";
import {IProduct} from "./product";
import {ProductFilterPipe} from "./product-filter.pipe";
import {StarComponent} from "../shared/star.component";
import {ProductService} from "./product.service";
import {error} from "util";

@Component({
    selector: 'pm-products',
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: ['app/products/products-list.component.css'],
    pipes: [ProductFilterPipe],
    directives: [StarComponent]
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    showImage: boolean = false;
    listFilter: string;
    products: IProduct[];
    errorMessage: string;

    constructor(private _productService: ProductService) {}

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit():void {
        this._productService.getProducts()
            .subscribe(
                products => this.products = products,
                error => this.errorMessage = <any> error
            );
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List:' + message;
    }
}