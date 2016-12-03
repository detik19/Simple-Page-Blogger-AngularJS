/**
 * Created by tedy.saputro on 03/12/2016.
 */
'use strict';

angular.module('spBlogger.posts').controller('PostController',[
    '$scope','postService',
    function($scope, postService){
        $scope.getAllPost=function(){
            return postService.getAll();
        };

        $scope.posts=$scope.getAllPost();
    }
]).controller('PostDetailController',[
    '$stateParams','$state','$scope','postService',
    function($stateParams,$state,$scope,postService){
        $scope.getPostById=function(id){
            return postService.getPostById(id);
        };

        $scope.closePost=function(){
            $state.go('allPosts');
        }

        $scope.singlePost=$scope.getPostById($stateParams.id);
    }
])