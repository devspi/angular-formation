import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {AuthenticationService} from '@app/_services/authentication.service';
import {AlertService} from '@app/_services/alert.service';
import {ControlPropertiesService} from '@app/_services/control-properties.service';
import {ControlKey} from '@app/_models/controlkey';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
        private controlPropertiesService: ControlPropertiesService
    ) {
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }

    get email() {
        return this.controlPropertiesService.getControlPropertiesMap().get(ControlKey.AUTH_EMAIL);
    }

    get password() {
        return this.controlPropertiesService.getControlPropertiesMap().get(ControlKey.AUTH_PASSWORD);
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            [ControlKey.AUTH_EMAIL]: ['', Validators.required],
            [ControlKey.AUTH_PASSWORD]: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
    }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.login(this.loginForm.get(ControlKey.AUTH_EMAIL).value, this.loginForm.get(ControlKey.AUTH_PASSWORD).value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    console.log(error);
                    this.alertService.error(error.error);
                    this.loading = false;
                });
    }
}
