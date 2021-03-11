import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

    registrationForm: FormGroup;

    constructor(private fb: FormBuilder,
                private authService: AuthService,
                private router: Router) {

    }

    ngOnInit(): void {
        this.registrationForm = this.fb.group({
           name: ['', [Validators.required, Validators.minLength(3)]],
           email: ['', [Validators.email, Validators.required]],
           password: ['', [Validators.required, Validators.minLength(6)]],
           confirmPassword: ['', [Validators.required]]
        });
    }

    register(): void {
        const [name, email, password] = this.registrationForm.getRawValue();
        this.authService.register(email, password, name);
        this.router.navigate(['profile']);
        
    }
}

