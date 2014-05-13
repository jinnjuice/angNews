/* global app:true */
'use strict';

var app = angular.module('angNewsApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'firebase'
]);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/posts.html',
            controller: 'PostsController'
        })
        .otherwise({
            redirectTo: '/'
        });
})
.constant('FIREBASE_URL', 'https://glowing-fire-3897.firebaseio.com/');

