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

    modalCodeStr = `

    
    // ajax code
    
    var modalBody = '';
    if (formType == 'text') {
         modalBody =   
        '<div class="row">' +
        '<div class="col-md-8" style="margin-bottom: 15px">' +
        '<textarea class="editor" name="text1">Enter some text here</textarea>' +
        '</div>' +
        '</div>';
    } else {
        modalBody =
        '<div class="row">' +
        '<div class="col-md-8" style="margin-bottom: 15px">' +
        '<input type="text" class="form-control" placeholder="name" id="name">' +
        '</div>' +
        '<div class="col-md-8" style="margin-bottom: 15px">' +
        '<input type="text" class="form-control" placeholder="city" id="city">' +
        '</div>' +
        '<div class="col-md-8" style="margin-bottom: 15px">' +
        '<input type="number" class="form-control" placeholder="mobile" id="mobile">' +
        '</div>' +
        '<div class="col-md-8" style="margin-bottom: 15px">' +
        '<input type="number" class="form-control" placeholder="age" id="age">' +
        '</div>' +
        '</div>';
    }

    var modal =
    '<div id="user-modal" class="modal fade">' +
    '<div class="modal-dialog modal-lg" role="document">' +
    '<div class="modal-content">' +
    '<div class="modal-header">' +
    '<h5 class="modal-title">Please Enter Following Details</h5>' +
    '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
    '<span aria-hidden="true">&times;</span>' +
    '</button>' +
    '</div>' +
    '<div class="modal-body">' +
                        modalBody +
    '</div>' +
    '<div class="modal-footer">' +
    '<button type="button" id="submit-button" class="btn btn-primary" data-dismiss="modal">Save changes</button>' +
    '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>';
    ;
    
    function sendAjaxForPostWithData(body, pUrl, scb, fcb) {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", pUrl, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(body));
        xhr.onreadystatechange = function() {
            xhr.status === 200 ? scb() : fcb();
        };
    
    }
    
    function addNewRecordAjax(body, scb, fcb) {
        const url = 'add-user';
        sendAjaxForPostWithData(body, url, scb, fcb);
    }
    
    // ajax code

    function init(){
        if(window.location.pathname.indexOf(url) != -1){
            document.body.innerHTML += modal;
            if($(".editor").jqte){
                $(".editor").jqte();
            }
            setTimeout(function(){
                $('#user-modal').modal('show');
            }, time * 1000);
        }
    };
    init();
    
    $('#submit-button').on('click',function(){
    var scb = function () {
        location.reload();
        console.log('Record Added Successfully.');
    };

    var fcb = function () {

    };

    var formData = {name: '', city: '', mobile: '', age: 0};
    var inputFieldsArr = document.getElementById('user-modal').getElementsByTagName('input');
    if(!inputFieldsArr[0].value || !inputFieldsArr[1].value || !inputFieldsArr[2].value || !inputFieldsArr[3].value){
        alert('Please fill the form properly.');
    }
    formData.name = inputFieldsArr[0].value;
    formData.city = inputFieldsArr[1].value;
    formData.mobile = inputFieldsArr[2].value;
    formData.age = inputFieldsArr[3].value;
    addNewRecordAjax(formData, scb, fcb);
});

    
`;

    dataArr: any;
    person = this.initPerson();
    pageUrl = '';
    popupTime = 0;

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

    checkbox = {
        options: 'text'
    };

    generateCode(pUrl, pTime, pFormType) {

        var url = 'var url = "' + pUrl + '";';
        var time = 'var time = ' + pTime + ';';
        var formType = 'var formType = "' + pFormType + '";';
        var modalBody = '';
        var modal = '';
        this.modalCodeStr = '(function () {' + '\n' + '\n' + time + '\n' + url + '\n' + formType + '\n' + this.modalCodeStr + '\n' + '})();';
        var uriContent = "data:application/octet-stream," + encodeURIComponent(this.modalCodeStr);
        var newWindow = window.open(uriContent, 'generated-modal.js');
        console.log(modal);

    };

    ngOnInit() {
        this.getUsers();
    }

}

