import {Component, OnInit} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    constructor(private http: Http) {

    }

    dataArr: any;
    person = this.initPerson();

    // ajax code
    sendAjaxForGet(pUrl, scb, fcb) {
        this.http.get(pUrl)
            .subscribe(
                function (response) {
                    scb(JSON.parse(response['_body']));
                },
                function (error) {
                    fcb(error);
                },
                function () {
                    console.log('call handled successfully');
                }
            )

    }

    getUsersAjax(scb, fcb) {
        const url = 'users';
        this.sendAjaxForGet(url, scb, fcb);
    }

    // ajax code

    // get data

    getUsers() {
        const scope = this;
        let scb = function (response) {
            scope.dataArr = response || [];
        };

        let fcb = function (response) {
            console.log(response);
        };

        this.getUsersAjax(scb, fcb);
    }

    // get data

    clone(obj) {
        let attr;
        let copy;
        if (null == obj || 'object' !== typeof obj) {
            return obj;
        }
        copy = obj.constructor();
        for (attr in obj) {
            if (obj.hasOwnProperty(attr)) {
                copy[attr] = obj[attr];
            }
        }
        return copy;
    }

    initPerson() {
        return {
            name: '',
            city: '',
            mobile: '',
            age: null
        }
    }

    ngOnInit() {
        this.getUsers();
    }

}
