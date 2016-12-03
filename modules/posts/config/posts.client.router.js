/**
 * Created by tedy.saputro on 03/12/2016.
 */
'use strict';

angular.module('spBlogger.posts').config(['$stateProvider','$locationProvider',
    function($stateProvider, $locationProvider){
        $stateProvider.state('allPosts',{
            url:'/posts',
            templateUrl:'modules/posts/views/posts.client.view.html',
            controller:'PostController'
        });
        $stateProvider.state('SinglePost', {
            url:'/posts/:id/:permalink',
            templateUrl:'modules/posts/views/singlepost.client.view.html',
            controller:'PostDetailController'
        });
    }

]);

