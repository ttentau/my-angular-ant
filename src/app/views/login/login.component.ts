import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html'
})
export class LoginComponent {
    account: string;
    password: string;

    constructor(private router: Router) {
    }

    login() {

    }

    register() {
        this.router.navigate(['/register']);
    }
}
