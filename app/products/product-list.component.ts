import {Component, OnInit} from "angular2/core";
import {IProduct} from "./product";
import {ProductFilterPipe} from "./product-filter.pipe";

@Component({
    selector: 'pm-products',
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: ['app/products/products-list.component.css'],
    pipes: [ProductFilterPipe]
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    showImage: boolean = false;
    listFilter: string = 'cart';
    products: IProduct[] = [
        {
            "productId": 1,
            "name": "Leaf Rake",
            "code": "GDN-0011",
            "releaseDate": "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
        },
        {
            "productId": 2,
            "name": "Garden Cart",
            "code": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
        },
        {
            "productId": 5,
            "name": "Hammer",
            "code": "TBX-0048",
            "releaseDate": "May 21, 2016",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
        },
        {
            "productId": 8,
            "name": "Saw",
            "code": "TBX-0022",
            "releaseDate": "May 15, 2016",
            "description": "15-inch steel blade hand saw",
            "price": 11.55,
            "starRating": 3.7,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
        },
        {
            "productId": 10,
            "name": "Video Game Controller",
            "code": "GMG-0042",
            "releaseDate": "October 15, 2015",
            "description": "Standard two-button video game controller",
            "price": 35.95,
            "starRating": 4.6,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
        }
    ];

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    ngOnInit():any {
        console.log("In OnInit!");
        return undefined;
    }
}