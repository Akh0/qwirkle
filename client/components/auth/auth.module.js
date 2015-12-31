'use strict';

angular.module('qwirkleApp.auth', [
  'qwirkleApp.constants',
  'qwirkleApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
