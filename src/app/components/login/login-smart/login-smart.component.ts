import { AfterViewInit, Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { AuthService } from '@services/auth/auth.service';
import { LoginDumbComponent } from '@component/login/login-dumb/login-dumb.component';

@Component({
  templateUrl: './login-smart.component.html',
})
export class LoginSmartComponent implements OnInit, AfterViewInit {

  @ViewChild('loginDumb', {read: ViewContainerRef})
  loginDumbComponentRef: ViewContainerRef;
  loginDumbComponent: LoginDumbComponent;

  constructor(private readonly authService: AuthService,
              private readonly resolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
  }

  login() {
    this.authService.signingWithGoogle()
      .then()
      .catch((err) => {
        console.error(err);
      });
  }

  ngAfterViewInit(): void {
    this.loginDumbComponent = this.getLazyLoginDumpComponent().instance;
    this.loginDumbComponent.loginEventEmitter.subscribe(() => this.login());
  }

  getLazyLoginDumpComponent() {
    this.loginDumbComponentRef.clear();
    const componentFactory = this.resolver.resolveComponentFactory(LoginDumbComponent);
    return this.loginDumbComponentRef.createComponent(componentFactory);
  }
}
