'use strict';
/* global app:true */

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
        .when('/posts/:postId', {
            templateUrl: 'views/showpost.html',
            controller: 'PostViewController'
        })
        .when('/register', {
            templateUrl: 'views/register.html',
            controller: 'AuthController'
        })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'AuthController'
        })
        .when('/users/:username', {
            templateUrl: 'views/profile.html',
            controller: 'ProfileController'
        })
        .otherwise({
            redirectTo: '/'
        });
})
.constant('FIREBASE_URL', 'https://glowing-fire-3897.firebaseio.com/');

