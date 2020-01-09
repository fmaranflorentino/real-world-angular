import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private productInfo: any;
  base64Image: string;

  @Input()
  set product(value) {
    this.productInfo = value;
  }
  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.base64Image = this.productFirstImg;
  }

  transform() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.base64Image);
  }

  get productObj() {
    return this.productInfo;
  }

  get productLink() {
    return this.productObj ? `/produtos/${this.productObj.produto.id}/detalhe` : './../../../../assets/img/nao-disponivel.jpg';
  }

  get productFirstImg() {
    return this.productObj ? `data:image/png;base64, ${this.productObj.produto.imagens[0]}` : './../../../../assets/img/nao-disponivel.jpg';
  }

}
