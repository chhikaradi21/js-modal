import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    usernameLogin = '';
    passwordLogin = '';
    message = '';

    constructor(private router: Router) {
    }

    dummyLogin(username, password) {
        if (username !== 'dummy') {
            this.message = 'Username does not exist';
            return 0;
        }

        if (password !== 'dummy') {
            this.message = 'Password is not correct';
            return 0;
        }

        if (username === 'dummy' && password === 'dummy') {
            this.router.navigateByUrl('/dashboard');
        }
    }

    onFocus() {
        this.message = '';
    }

    ngOnInit() {
    }

}
