/**
 * Created by tedy.saputro on 03/12/2016.
 */
'use strict';
angular.module('spBlogger',[
    'spBlogger.posts',

]);

angular.module('spBlogger').run(['$state', function($state){
    $state.go('allPosts');}
]);

angular.module('spBlogger').value('version','V1.0');