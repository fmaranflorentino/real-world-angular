import { Directive, Input, OnChanges, TemplateRef, ViewContainerRef, ComponentFactoryResolver, OnInit } from '@angular/core';
import { BtnLoaderComponent } from '../../components/btn-loader/btn-loader.component';

@Directive({
  selector: '[appLoginBtn]',
})
export class LoginBtnDirective implements OnInit, OnChanges {

  @Input('appLoginBtn') loading: boolean;

  constructor(
    private templateRef: TemplateRef<any>,
    private vcr: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    this.vcr.createEmbeddedView(this.templateRef);

    if (this.loading) {
      const componentFactory = this.cfr.resolveComponentFactory(BtnLoaderComponent);

      this.vcr.createComponent(componentFactory);
    }
  }

  ngOnChanges() {

  }

}
