"use-strict";


// Sales List
var salesArray = [{name: 'Sale 1', date: '26 AUG 2019', summary: 'Example sales summary.', id:'sale_1' }, {name: 'Sale 2', date: '25 AUG 2019', summary: 'Example sales summary.', id:'sale_1'  }, {name: 'Sale 3', date: '24 AUG 2019', summary: 'Example sales summary.', id:'sale_1'  }, {name: 'Sale 4', date: '23 AUG 2019', summary: 'Example sales summary.', id:'sale_1'  }, {name: 'Sale 5', date: '22 AUG 2019', summary: 'Example sales summary.', id:'sale_1'  }, {name: 'Sale 6', date: '21 AUG 2019', summary: 'Example sales summary.', id:'sale_1'  }, {name: 'Sale 7', date: '20 AUG 2019', summary: 'Example sales summary.', id:'sale_1'  }, {name: 'Sale 8', date: '19 AUG 2019', summary: 'Example sales summary.', id:'sale_1'  }, {name: 'Sale 9', date: '18 AUG 2019', summary: 'Example sales summary.', id:'sale_1'  }, {name: 'Sale 10', date: '17 AUG 2019', summary: 'Example sales summary.', id:'sale_1'  }, {name: 'Sale 11', date: '16 AUG 2019', summary: 'Example sales summary.', id:'sale_1'  }, {name: 'Sale 12', date: '15 AUG 2019', summary: 'Example sales summary.', id:'sale_1'  }, {name: 'Sale 13', date: '14 AUG 2019', summary: 'Example sales summary.', id:'sale_1'  }, {name: 'Sale 14', date: '13 AUG 2019', summary: 'Example sales summary.', id:'sale_1'  }, {name: 'Sale 15', date: '12 AUG 2019', summary: 'Example sales summary.', id:'sale_1'  }, {name: 'Sale 16', date: '11 AUG 2019', summary: 'Example sales summary.', id:'sale_1'  }, {name: 'Sale 17', date: '10 AUG 2019', summary: 'Example sales summary.', id:'sale_1'  }, {name: 'Sale 18', date: '9 AUG 2019', summary: 'Example sales summary.', id:'sale_1'  }, {name: 'Sale 19', date: '8 AUG 2019', summary: 'Example sales summary.', id:'sale_1'  }, {name: 'Sale 20', date: '7 AUG 2019', summary: 'Example sales summary.', id:'sale_1'  }, ];
var container = document.getElementById('SalesListHold');

for (var i = 0; i < salesArray.length; i++) {
    container.innerHTML += 
    '<div class="mid-list-hold  toggle" id="SalesList">' +
        '<div class="row col-md-12 dash-row p0 fade toggle" id="' + salesArray[i].name + '">' +
            '<div class="dash-side-title py-sec-2 bg-dark-blue greyblue col-md-2 toggle">' +
                '<h3 class="center m0 ">' + salesArray[i].date + '</h3>' +
            '</div>' +
            '<div class="col-md-10 dash-desc-hold toggle" id="">' +
                '<h3 class="py-sec-2 white bold">' + salesArray[i].name + '</h3>' +
                '<p class="greyblue bold">' + salesArray[i].summary + '</p>' +
            '</div>' +
        '</div>' +
    '</div>';
}

// Clients List
var clientsArray = [{name: 'Client 1', status: 'CURRENT', summary: 'List details about your client here.', id:'client_1' }, {name: 'Client 2', status: 'CURRENT', summary: 'List details about your client here.', id:'client_2'}, {name: 'Client 3', status: 'DEBT', summary: 'List details about your client here.', id:'client_3'}, {name: 'Client 4', status: 'INACTIVE', summary: 'List details about your client here.', id:'client_4'  }, {name: 'Client 5', status: 'CURRENT', summary: 'List details about your client here.', id:'client_5'  }, {name: 'Client 6', status: 'CURRENT', summary: 'List details about your client here.', id:'client_6'  }, {name: 'Client 7', status: 'CURRENT', summary: 'List details about your client here.', id:'client_7'  }, {name: 'Client 8', status: 'DEBT', summary: 'List details about your client here.', id:'client_8'  }, {name: 'Client 9', status: 'INACTIVE', summary: 'List details about your client here.', id:'client_9'  }, {name: 'Client 10', status: 'CURRENT', summary: 'List details about your client here.', id:'client_10'  }, {name: 'Client 11', status: 'CURRENT', summary: 'List details about your client here.', id:'client_11'  }, {name: 'Client 12', status: 'DEBT', summary: 'List details about your client here.', id:'client_12'  }, {name: 'Client 13', status: 'DEBT', summary: 'List details about your client here.', id:'client_13'  }, {name: 'Client 14', status: 'CURRENT', summary: 'List details about your client here.', id:'client_14'  }, {name: 'Client 15', status: 'CURRENT', summary: 'List details about your client here.', id:'client_15'  }, {name: 'Client 16', status: 'INACTIVE', summary: 'List details about your client here.', id:'client_16'  }, {name: 'Client 17', status: 'DEBT', summary: 'List details about your client here.', id:'client_17'  }, {name: 'Client 18', status: 'CURRENT', summary: 'List details about your client here.', id:'client_18'  }, {name: 'Client 19', status: 'CURRENT', summary: 'List details about your client here.', id:'client_19'  }, {name: 'Client 20', status: 'CURRENT', summary: 'List details about your client here.', id:'client_20' } ];
var container = document.getElementById('ClientsListHold');

for (var i = 0; i < clientsArray.length; i++) {
    if (clientsArray[i].status === "CURRENT") {
        container.innerHTML += 
        '<div class=" mid-list-hold toggle" id="SalesList" id="'+ clientsArray[i].id +'"_CURRENT>' +
            '<div class="row col-md-12 dash-row p0 fade current toggle" id="' + clientsArray[i].name + '">' +
                '<div class="dash-side-title py-sec-2 bg-dark-blue greyblue col-md-2 toggle">' +
                    '<h3 class="center m0 ">' + clientsArray[i].status + '</h3>' +
                '</div>' +
                '<div class="col-md-10 dash-desc-hold toggle" id="">' +
                    '<h3 class="py-sec-2 white bold">' + clientsArray[i].name + '</h3>' +
                    '<p class="greyblue bold">' + clientsArray[i].summary + '</p>' +
                '</div>' +
            '</div>' +
        '</div>';
    } else if (clientsArray[i].status === "DEBT") {
        container.innerHTML += 
        '<div class=" mid-list-hold toggle" id="SalesList" id="'+ clientsArray[i].id +'"_DEBT>' +
            '<div class="row col-md-12 dash-row p0 fade debt toggle" id="' + clientsArray[i].name + '">' +
                '<div class="dash-side-title py-sec-2 bg-dark-blue greyblue col-md-2 toggle">' +
                    '<h3 class="center m0 ">' + clientsArray[i].status + '</h3>' +
                '</div>' +
                '<div class="col-md-10 dash-desc-hold toggle" id="">' +
                    '<h3 class="py-sec-3 white bold">' + clientsArray[i].name + '</h3>' +
                    '<p class="greyblue bold">' + clientsArray[i].summary + '</p>' +
                '</div>' +
            '</div>' +
        '</div>';
    } else if (clientsArray[i].status === "INACTIVE") {
        container.innerHTML += 
        '<div class=" mid-list-hold toggle" id="SalesList" id="'+ clientsArray[i].id +'"_INACTIVE>' +
            '<div class="row col-md-12 dash-row p0 fade inactive toggle" id="' + clientsArray[i].name + '">' +
                '<div class="dash-side-title py-sec-2 bg-dark-blue greyblue col-md-2 toggle">' +
                    '<h3 class="center m0 ">' + clientsArray[i].status + '</h3>' +
                '</div>' +
                '<div class="col-md-10 dash-desc-hold toggle" id="">' +
                    '<h3 class="py-sec-2 white bold">' + clientsArray[i].name + '</h3>' +
                    '<p class="greyblue bold">' + clientsArray[i].summary + '</p>' +
                '</div>' +
            '</div>' +
        '</div>';
    }
}

// Calendar List
var calendarArray = [{name: 'Event 1', date: '26 AUG 2019', summary: 'Insert calendar event details here.' }, {name: 'Event 2', date: '25 AUG 2019', summary: 'Insert calendar event details here.' }, {name: 'Event 3', date: '24 AUG 2019', summary: 'Insert calendar event details here.' }, {name: 'Event 4', date: '23 AUG 2019', summary: 'Insert calendar event details here.' }, {name: 'Event 5', date: '22 AUG 2019', summary: 'Insert calendar event details here.' }, {name: 'Event 6', date: '21 AUG 2019', summary: 'Insert calendar event details here.' }, {name: 'Event 7', date: '20 AUG 2019', summary: 'Insert calendar event details here.' }, {name: 'Event 8', date: '19 AUG 2019', summary: 'Insert calendar event details here.' }, {name: 'Event 9', date: '18 AUG 2019', summary: 'Insert calendar event details here.' }, {name: 'Event 10', date: '17 AUG 2019', summary: 'Insert calendar event details here.' }, {name: 'Event 11', date: '16 AUG 2019', summary: 'Insert calendar event details here.' }, {name: 'Event 12', date: '15 AUG 2019', summary: 'Insert calendar event details here.' }, {name: 'Event 13', date: '14 AUG 2019', summary: 'Insert calendar event details here.' }, {name: 'Event 14', date: '13 AUG 2019', summary: 'Insert calendar event details here.' }, {name: 'Event 15', date: '12 AUG 2019', summary: 'Insert calendar event details here.' }, {name: 'Event 16', date: '11 AUG 2019', summary: 'Insert calendar event details here.' }, {name: 'Event 17', date: '10 AUG 2019', summary: 'Insert calendar event details here.' }, {name: 'Event 18', date: '9 AUG 2019', summary: 'Insert calendar event details here.' }, {name: 'Event 19', date: '8 AUG 2019', summary: 'Insert calendar event details here.' }, {name: 'Event 20', date: '7 AUG 2019', summary: 'Insert calendar event details here.' }, ];
var container = document.getElementById('CalendarListHold');

for (var i = 0; i < calendarArray.length; i++) {
    container.innerHTML += 
    '<div class=" mid-list-hold toggle" id="SalesList">' +
        '<div class="row col-md-12 dash-row p0 fade toggle" id="' + calendarArray[i].name + '">' +
            '<div class="dash-side-title py-sec-2 bg-dark-blue greyblue col-md-2 toggle">' +
                '<h3 class="center m0 ">' + calendarArray[i].date + '</h3>' +
            '</div>' +
            '<div class="col-md-10 dash-desc-hold toggle" id="">' +
                '<h3 class="py-sec-2 white bold">' + calendarArray[i].name + '</h3>' +
                '<p class="greyblue bold">' + calendarArray[i].summary + '</p>' +
            '</div>' +
        '</div>' +
    '</div>';
}

// Locations List
var locationsArray = [{name: 'Location 1', date: '26 AUG 2019', summary: 'List location details here.' }, {name: 'Location 2', date: '25 AUG 2019', summary: 'List location details here.' }, {name: 'Location 3', date: '24 AUG 2019', summary: 'List location details here.' }, {name: 'Location 4', date: '23 AUG 2019', summary: 'List location details here.' }, {name: 'Location 5', date: '22 AUG 2019', summary: 'List location details here.' }, {name: 'Location 6', date: '21 AUG 2019', summary: 'List location details here.' }, {name: 'Location 7', date: '20 AUG 2019', summary: 'List location details here.' }, {name: 'Location 8', date: '19 AUG 2019', summary: 'List location details here.' }, {name: 'Location 9', date: '18 AUG 2019', summary: 'List location details here.' }, {name: 'Location 10', date: '17 AUG 2019', summary: 'List location details here.' }, {name: 'Location 11', date: '16 AUG 2019', summary: 'List location details here.' }, {name: 'Location 12', date: '15 AUG 2019', summary: 'List location details here.' }, {name: 'Location 13', date: '14 AUG 2019', summary: 'List location details here.' }, {name: 'Location 14', date: '13 AUG 2019', summary: 'List location details here.' }, {name: 'Location 15', date: '12 AUG 2019', summary: 'List location details here.' }, {name: 'Location 16', date: '11 AUG 2019', summary: 'List location details here.' }, {name: 'Location 17', date: '10 AUG 2019', summary: 'List location details here.' }, {name: 'Location 18', date: '9 AUG 2019', summary: 'List location details here.' }, {name: 'Location 19', date: '8 AUG 2019', summary: 'List location details here.' }, {name: 'Location 20', date: '7 AUG 2019', summary: 'List location details here.' }, ];
var container = document.getElementById('LocationsListHold');

for (var i = 0; i < locationsArray.length; i++) {
    container.innerHTML += 
    '<div class="mid-list-hold toggle " id="SalesList">' +
        '<div class="row col-md-12 dash-row p0 fade toggle" id="' + locationsArray[i].name + '">' +
            '<div class="dash-side-title py-sec-2 bg-dark-blue greyblue col-md-2 toggle">' +
                '<h3 class="center m0 ">' + locationsArray[i].date + '</h3>' +
            '</div>' +
            '<div class="col-md-10 dash-desc-hold toggle" id="">' +
                '<h3 class="py-sec-2 white bold">' + locationsArray[i].name + '</h3>' +
                '<p class="greyblue bold">' + locationsArray[i].summary + '</p>' +
            '</div>' +
        '</div>' +
    '</div>';
}

// Social List
var socialArray = [{name: 'Twitter', status: 'ACTIVE', summary: 'Add social details here.' }, {name: 'Instagram', status: 'ACTIVE', summary: 'Add social details here.' }, {name: 'Facebook', status: 'ACTIVE', summary: 'Add social details here.' }, {name: 'Snapchat', status: 'ACTIVE', summary: 'Add social details here.' }, {name: 'Youtube', status: 'ACTIVE', summary: 'Add social details here.' } ];
var container = document.getElementById('SocialListHold');

for (var i = 0; i < socialArray.length; i++) {
    if (socialArray[i].name === "Twitter") {
    container.innerHTML += 
        '<div class="mid-list-hold  toggle" id="SalesList">' +
            '<div class="row col-md-12 dash-row p0 fade twitter toggle" id="' + socialArray[i].name + '">' +
                '<div class="dash-side-title py-sec-2 bg-dark-blue greyblue col-md-2 toggle">' +
                    '<h3 class="center m0 ">' + socialArray[i].status + '</h3>' +
                '</div>' +
                '<div class="col-md-10 dash-desc-hold toggle" id="">' +
                    '<h3 class="py-sec-2 white bold">' + '<i class="fab fa-twitter"></i> ' + socialArray[i].name + '</h3>' +
                    '<p class="greyblue bold">' + socialArray[i].summary + '</p>' +
                '</div>' +
            '</div>' +
        '</div>';
    } else if (socialArray[i].name === "Instagram") {
    container.innerHTML += 
        '<div class="mid-list-hold  toggle" id="SalesList">' +
            '<div class="row col-md-12 dash-row p0 fade instagram toggle" id="' + socialArray[i].name + '">' +
                '<div class="dash-side-title py-sec-2 bg-dark-blue greyblue col-md-2 toggle">' +
                    '<h3 class="center m0 ">' + socialArray[i].status + '</h3>' +
                '</div>' +
                '<div class="col-md-10 dash-desc-hold toggle" id="">' +
                    '<h3 class="py-sec-2 white bold">' + '<i class="fab fa-instagram"></i> ' + socialArray[i].name + '</h3>' +
                    '<p class="greyblue bold">' + socialArray[i].summary + '</p>' +
                '</div>' +
            '</div>' +
        '</div>';
    } else if (socialArray[i].name === "Facebook") {
    container.innerHTML += 
        '<div class="mid-list-hold  toggle" id="SalesList">' +
            '<div class="row col-md-12 dash-row p0 fade facebook toggle" id="' + socialArray[i].name + '">' +
                '<div class="dash-side-title py-sec-2 bg-dark-blue greyblue col-md-2 toggle">' +
                    '<h3 class="center m0 ">' + socialArray[i].status + '</h3>' +
                '</div>' +
                '<div class="col-md-10 dash-desc-hold toggle" id="">' +
                    '<h3 class="py-sec-2 white bold">' + '<i class="fab fa-facebook-square"></i> ' + socialArray[i].name + '</h3>' +
                    '<p class="greyblue bold">' + socialArray[i].summary + '</p>' +
                '</div>' +
            '</div>' +
        '</div>';
    } else if (socialArray[i].name === "Snapchat") {
    container.innerHTML += 
        '<div class="mid-list-hold  toggle" id="SalesList">' +
            '<div class="row col-md-12 dash-row p0 fade snapchat toggle" id="' + socialArray[i].name + '">' +
                '<div class="dash-side-title py-sec-2 bg-dark-blue greyblue col-md-2 toggle">' +
                    '<h3 class="center m0 ">' + socialArray[i].status + '</h3>' +
                '</div>' +
                '<div class="col-md-10 dash-desc-hold toggle" id="">' +
                    '<h3 class="py-sec-2 white bold">' + '<i class="fab fa-snapchat-square"></i> ' + socialArray[i].name + '</h3>' +
                    '<p class="greyblue bold">' + socialArray[i].summary + '</p>' +
                '</div>' +
            '</div>' +
        '</div>';
    } else if (socialArray[i].name === "Youtube") {
    container.innerHTML += 
        '<div class="mid-list-hold  toggle" id="SalesList">' +
            '<div class="row col-md-12 dash-row p0 fade youtube toggle" id="' + socialArray[i].name + '">' +
                '<div class="dash-side-title py-sec-2 bg-dark-blue greyblue col-md-2 toggle">' +
                    '<h3 class="center m0 ">' + socialArray[i].status + '</h3>' +
                '</div>' +
                '<div class="col-md-10 dash-desc-hold toggle" id="">' +
                    '<h3 class="py-sec-2 white bold">' + '<i class="fab fa-youtube"></i> ' + socialArray[i].name + '</h3>' +
                    '<p class="greyblue bold">' + socialArray[i].summary + '</p>' +
                '</div>' +
            '</div>' +
        '</div>';
    }
}

// Settings List
var settingsArray = [{name: 'Setting 1', status: 'ENABLED', summary: 'Describe your settings here.' }, {name: 'Setting 2', status: 'ENABLED', summary: 'Describe your settings here.' }, {name: 'Setting 3', status: 'DISABLED', summary: 'Describe your settings here.' }, {name: 'Setting 4', status: 'DISABLED', summary: 'Describe your settings here.' }, {name: 'Setting 5', status: 'ENABLED', summary: 'Describe your settings here.' }, {name: 'Setting 6', status: 'ENABLED', summary: 'Describe your settings here.' }, {name: 'Setting 7', status: 'ENABLED', summary: 'Describe your settings here.' }, {name: 'Setting 8', status: 'DISABLED', summary: 'Describe your settings here.' }, {name: 'Setting 9', status: 'ENABLED', summary: 'Describe your settings here.' }, {name: 'Setting 10', status: 'ENABLED', summary: 'Describe your settings here.' }, {name: 'Setting 11', status: 'ENABLED', summary: 'Describe your settings here.' }, {name: 'Setting 12', status: 'DISABLED', summary: 'Describe your settings here.' }, {name: 'Setting 13', status: 'DISABLED', summary: 'Describe your settings here.' }, {name: 'Setting 14', status: 'ENABLED', summary: 'Describe your settings here.' }, {name: 'Setting 15', status: 'DISABLED', summary: 'Describe your settings here.' }, {name: 'Setting 16', status: 'ENABLED', summary: 'Describe your settings here.' }, {name: 'Setting 17', status: 'ENABLED', summary: 'Describe your settings here.' }, {name: 'Setting 18', status: 'DISABLED', summary: 'Describe your settings here.' }, {name: 'Setting 19', status: 'ENABLED', summary: 'Describe your settings here.' }, {name: 'Setting 20', status: 'ENABLED', summary: 'Describe your settings here.' }, ];
var container = document.getElementById('SettingsListHold');
var containerMobile = document.getElementById('SettingsListHoldMobile');

for (var i = 0; i < settingsArray.length; i++) {
    if (settingsArray[i].status === "ENABLED") {
        container.innerHTML += 
        '<div class="mid-list-hold  toggle" id="SalesList">' +
            '<div class="row col-md-12 dash-row p0 fade current toggle" id="' + settingsArray[i].name + '">' +
                '<div class="dash-side-title py-sec-2 bg-dark-blue greyblue col-md-2 toggle">' +
                    '<h3 class="center m0 ">' + settingsArray[i].status + '</h3>' +
                '</div>' +
                '<div class="col-md-10 dash-desc-hold toggle" id="">' +
                    '<h3 class="py-sec-2 white bold">' + settingsArray[i].name + '</h3>' +
                    '<p class="greyblue bold">' + settingsArray[i].summary + '</p>' +
                '</div>' +
            '</div>' +
        '</div>';
    } else if (settingsArray[i].status === "DISABLED") {
        container.innerHTML += 
        '<div class="mid-list-hold  toggle" id="SalesList">' +
            '<div class="row col-md-12 dash-row p0 fade inactive toggle" id="' + settingsArray[i].name + '">' +
                '<div class="dash-side-title py-sec-2 bg-dark-blue greyblue col-md-2 toggle">' +
                    '<h3 class="center m0 ">' + settingsArray[i].status + '</h3>' +
                '</div>' +
                '<div class="col-md-10 dash-desc-hold toggle" id="">' +
                    '<h3 class="py-sec-2 white bold">' + settingsArray[i].name + '</h3>' +
                    '<p class="greyblue bold">' + settingsArray[i].summary + '</p>' +
                '</div>' +
            '</div>' +
        '</div>';
    } 
    
}

// Setting initial classes for first list item in mid section
document.querySelectorAll('.mid-list-hold:nth-child(1) .dash-side-title')[0].classList.add("dash-side-title-active");
document.querySelectorAll('.mid-list-hold:nth-child(1) .current .dash-side-title')[0].classList.add("dash-side-title-current");
document.querySelectorAll('.mid-list-hold:nth-child(1) .twitter .dash-side-title')[0].classList.add("dash-side-title-twitter");

document.querySelectorAll('.mid-list-hold:nth-child(1) .dash-desc-hold')[0].classList.add("dash-desc-hold-active");

document.querySelectorAll('.mid-list-hold:nth-child(1) .dash-row')[0].classList.add("dash-row-active");


 //Toggling middle list click active states
var midList = document.getElementsByClassName("dash-row");
var midActiveStateToggle = function() {
    // On Row Click remove all active classes
    [].forEach.call(document.querySelectorAll('.toggle'), function (el) {
        el.classList.remove("dash-side-title-active", "dash-desc-hold-active", "dash-row-active", "dash-side-title-current", "dash-side-title-debt", "dash-side-title-inactive", "dash-side-title-twitter", "dash-side-title-instagram", "dash-side-title-facebook", "dash-side-title-youtube", "dash-side-title-snapchat");
    }); 

    // adding specific active classes to mid list items
    if ($(this)[0].classList.contains("current")){
        $(this)[0].children[0].classList.add("dash-side-title-current");
    } else if ($(this)[0].classList.contains("debt")){
        $(this)[0].children[0].classList.add("dash-side-title-debt");
    } else if ($(this)[0].classList.contains("inactive")) {
        $(this)[0].children[0].classList.add("dash-side-title-inactive");
    }  else if ($(this)[0].classList.contains("twitter")) {
        $(this)[0].children[0].classList.add("dash-side-title-twitter");
    }  else if ($(this)[0].classList.contains("facebook")) {
        $(this)[0].children[0].classList.add("dash-side-title-facebook");
    }  else if ($(this)[0].classList.contains("instagram")) {
        $(this)[0].children[0].classList.add("dash-side-title-instagram");
    }  else if ($(this)[0].classList.contains("snapchat")) {
        $(this)[0].children[0].classList.add("dash-side-title-snapchat");
    }   else if ($(this)[0].classList.contains("youtube")) {
        $(this)[0].children[0].classList.add("dash-side-title-youtube");
    } else {
        $(this)[0].children[0].classList.add("dash-side-title-active");
        $(this)[0].children[1].classList.add("dash-desc-hold-active");
        $(this)[0].classList.add("dash-row-active");
    }
};

for (var i = 0; i < midList.length; i++) {
    midList[i].addEventListener('click', midActiveStateToggle, false);
}

// Setting the add and removal classes of active classes to functions to avoid repetition
var addInitialClasses = function(){
    [].forEach.call(document.querySelectorAll('.mid-list-hold:nth-child(1) .dash-side-title'), function (el) {
        el.classList.add("dash-side-title-active");
    }); 
    [].forEach.call(document.querySelectorAll('.mid-list-hold:nth-child(1) .dash-desc-hold'), function (el) {
        el.classList.add("dash-desc-hold-active");
    }); 
    [].forEach.call(document.querySelectorAll('.mid-list-hold:nth-child(1) .dash-row'), function (el) {
        el.classList.add("dash-row-active");
    }); 
    [].forEach.call(document.querySelectorAll('.mid-list-hold:nth-child(1) .current .dash-side-title'), function (el) {
        el.classList.add("dash-side-title-current");
    }); 
    [].forEach.call(document.querySelectorAll('.mid-list-hold:nth-child(1) .debt .dash-side-title'), function (el) {
        el.classList.add("dash-side-title-debt");
    }); 
    [].forEach.call(document.querySelectorAll('.mid-list-hold:nth-child(1) .inactive .dash-side-title'), function (el) {
        el.classList.add("dash-side-title-inactive");
    }); 
    [].forEach.call(document.querySelectorAll('.mid-list-hold:nth-child(1) .twitter .dash-side-title'), function (el) {
        el.classList.add("dash-side-title-twitter");
    }); 
    [].forEach.call(document.querySelectorAll('.mid-list-hold:nth-child(1) .facebook .dash-side-title'), function (el) {
        el.classList.add("dash-side-title-facebook");
    }); 
    [].forEach.call(document.querySelectorAll('.mid-list-hold:nth-child(1) .instagram .dash-side-title'), function (el) {
        el.classList.add("dash-side-title-instagram");
    }); 
    [].forEach.call(document.querySelectorAll('.mid-list-hold:nth-child(1) .youtube .dash-side-title'), function (el) {
        el.classList.add("dash-side-title-youtube");
    }); 
    [].forEach.call(document.querySelectorAll('.mid-list-hold:nth-child(1) .snapchat .dash-side-title'), function (el) {
        el.classList.add("dash-side-title-snapchat");
    }); 
}

var removeActiveClasses = function(){
    [].forEach.call(document.querySelectorAll('.toggle'), function (el) {
        el.classList.remove("show-chart","mid-list-block","dash-link-hold-active", "dash-link-active", "dash-side-title-active", "dash-desc-hold-active", "dash-row-active", "dash-side-title-current", "dash-side-title-debt", "dash-side-title-inactive", "dash-side-title-twitter", "dash-side-title-instagram", "dash-side-title-facebook", "dash-side-title-youtube", "dash-side-title-snapchat");
    }); 
}


//Menu click functions

//Sales
document.getElementById("SalesHold").addEventListener("click", function(){ 
    
    //Remove all active classes
    removeActiveClasses();
     
    //Add active classes to prefered element
    document.getElementById("SalesListHold").classList.add("mid-list-block");
    document.getElementById("SalesHold").classList.add("dash-link-hold-active");
    document.getElementById("SalesHoldLink").classList.add("dash-link-active");
        
    // Add initial class to first list item because it's removed when cycling through options
    addInitialClasses();

    // Show appropriate chart
    document.getElementById("SalesChartHold").classList.add("show-chart");
 });
    
 //Clients
 document.getElementById("ClientsHold").addEventListener("click", function(){ 
    
    //Remove all active classes
    removeActiveClasses();
     
    //Add active classes to prefered element
    document.getElementById("ClientsListHold").classList.add("mid-list-block");
    document.getElementById("ClientsHold").classList.add("dash-link-hold-active");
    document.getElementById("ClientsHoldLink").classList.add("dash-link-active");
        
    // Add initial class to first list item because it's removed when cycling through options
    addInitialClasses();

    // Show appropriate chart
    document.getElementById("ClientChartHold").classList.add("show-chart");
 });

  //Calendar
  document.getElementById("CalendarHold").addEventListener("click", function(){ 
    
    //Remove all active classes
    removeActiveClasses();

    //Add active classes to prefered element
    document.getElementById("CalendarListHold").classList.add("mid-list-block");
    document.getElementById("CalendarHold").classList.add("dash-link-hold-active");
    document.getElementById("CalendarHoldLink").classList.add("dash-link-active");
        
    // Add initial class to first list item because it's removed when cycling through options
    addInitialClasses();

    // Show appropriate chart
    document.getElementById("CalendarChartHold").classList.add("show-chart");
 });

  //Locations
  document.getElementById("LocationsHold").addEventListener("click", function(){ 
    
    //Remove all active classes
    removeActiveClasses();
     
    //Add active classes to prefered element
    document.getElementById("LocationsListHold").classList.add("mid-list-block");
    document.getElementById("LocationsHold").classList.add("dash-link-hold-active");
    document.getElementById("LocationsHoldLink").classList.add("dash-link-active");
        
    // Add initial class to first list item because it's removed when cycling through options
    addInitialClasses();
 
    // Show appropriate chart
    document.getElementById("LocationsChartHold").classList.add("show-chart");
 });

  //Social
  document.getElementById("SocialHold").addEventListener("click", function(){ 
    
    //Remove all active classes
    removeActiveClasses();
     
    //Add active classes to prefered element
    document.getElementById("SocialListHold").classList.add("mid-list-block");
    document.getElementById("SocialHold").classList.add("dash-link-hold-active");
    document.getElementById("SocialHoldLink").classList.add("dash-link-active");
        
    // Add initial class to first list item because it's removed when cycling through options
    addInitialClasses();

    // Show appropriate chart
    document.getElementById("SocialChartHold").classList.add("show-chart");
 });

  //Settings
  document.getElementById("SettingsHold").addEventListener("click", function(){ 
    
    //Remove all active classes
    removeActiveClasses();
   
    //Add active classes to prefered element
    document.getElementById("SettingsListHold").classList.add("mid-list-block");
    document.getElementById("SettingsHold").classList.add("dash-link-hold-active");
    document.getElementById("SettingsHoldLink").classList.add("dash-link-active");
        
    // Add initial class to first list item because it's removed when cycling through options
    addInitialClasses();

 });

