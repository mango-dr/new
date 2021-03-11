import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
// @ts-ignore
export class LoginComponent implements OnInit {


loginForm: FormGroup;

constructor(private fb: FormBuilder,
            private authService: AuthService,
            private router: Router) {

}

ngOnInit(): void {
    this.loginForm = this.fb.group({
        email: ['', [Validators.email, Validators.required]],
        password: ['', [Validators.required, Validators.minLength(6)]],
});

}
    login(): void {
        const {email, password} = this.loginForm.getRawValue();
        this.authService.loginWithEmailAndPassword(email, password);
        this.navigateToHome();
    }

    loginWithGoogle(): void {
        this.authService.loginWithGoogle();
        this.navigateToHome();
      }

    navigateToHome(): void {
        this.router.navigate(['home']);
    }
}
