# Js-modal
This Single Page App is written using AngularJS 4. It contains mainly three components Login, Dashboard and Reusable Modal Plugin. Modal plugin is written using pure js so it can be used in any code base.

### Technologies Used
AngularJS 4, MongoDB, Bootstrap 4, Node Express, Angularjs CLI, JQuery.

### Contents
1. It shows demo for dummy login page.
2. You can add new users on dashboard, which are saved to MongoDB using Node Express Framework.
3. Saved users can be retrieved on page load and shown in table.
4. Modal plugin to add users is written in pure JS, So it can can invoked anywhere in any code base.

### Modal Plugin
As explained it is written in pure JS. Its file is in src/assets/modal.js
This modal is invoked from any page and you can fill form on this modal. This form data can be submitted to store data in MongoDB using NodeJS. On saving data it refreshes the page to load newly created data.
How it works:-

    <button type="button"
        class="btn btn-primary btn-sm"
        data-toggle="modal"
        data-target="#user-modal">Add New Records
    </button>


### JS Source Code


    (function () {
    
    // ajax code
    // this function will make ajax request to save data on server
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

    // modal content. I will append this modal it to the page using javascript.
    var modalHtml =
    '<div id="user-modal" class="modal fade">' +
        '<div class="modal-dialog modal-lg" role="document">' +
            '<div class="modal-content">' +
                '<div class="modal-header">' +
                    '<h5 class="modal-title">Users Modal</h5>' +
                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
                    '<span aria-hidden="true">&times;</span>' +
                    '</button>' +
                '</div>' +
                '<div class="modal-body">' +
                    '<div class="col-md-8" style="margin-bottom: 15px"><input type="text" class="form-control" placeholder="name" id="name-user"></div>' +
                    '<div class="col-md-8" style="margin-bottom: 15px"><input type="text" class="form-control" placeholder="city" id="city"></div>' +
                    '<div class="col-md-8" style="margin-bottom: 15px"><input type="number" class="form-control" placeholder="mobile" id="mobile"></div>' +
                    '<div class="col-md-8" style="margin-bottom: 15px"><input type="number" class="form-control" placeholder="age" id="age"></div>' +
                '</div>' +
                '<div class="modal-footer">' +
                    '<button type="button" id="submit-button" class="btn btn-primary" data-dismiss="modal">Save changes</button>' +
                    '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>' +
                '</div>' +
            '</div>' +
        '</div>' +
    '</div>';

    // add modal to the page.
    document.body.innerHTML += modalHtml;

    // JQuery function to bind click event on submit button. This func will help to save data to server.
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
        // Retrieving form values to store data to server.
        formData.name = inputFieldsArr[0].value;
        formData.city = inputFieldsArr[1].value;
        formData.mobile = inputFieldsArr[2].value;
        formData.age = inputFieldsArr[3].value;
        addNewRecordAjax(formData, scb, fcb);
    });
    })();


### How to run on local
Follow these steps
1. git clone git@github.com:chhikaradi21/js-modal.git
2. cd js-modal
3. npm install(using node version 6)
4. ng serve
5. Access in browser at port 4200 (localhost:4200)

### Working Demo
<a href="http://adityachhikara.me/login" target="_blank">Login Page</a>
<a href="http://adityachhikara.me/dashboard" target="_blank">Dashboard Page</a>

## Further help
1. This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.2.
2. Node version 6
